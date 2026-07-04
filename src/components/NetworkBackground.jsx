import { useEffect, useRef } from 'react';

const NODE_COUNT_DESKTOP = 22;
const NODE_COUNT_MOBILE = 12;
const LINK_DISTANCE = 200;
const PACKET_SPEED = 0.006;
const FRAME_INTERVAL = 1000 / 30; // throttle the draw loop to ~30fps — plenty for a subtle background

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let nodes = [];
    let links = [];
    let raf = null;
    let lastTime = 0;
    let resizeTimeout = null;
    let paused = document.hidden;

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5eead4';
    const amber = getComputedStyle(document.documentElement).getPropertyValue('--amber').trim() || '#f5a623';

    function buildGraph() {
      const count = width < 720 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15
      }));

      links = [];
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < LINK_DISTANCE) {
            links.push({ a: i, b: j, t: Math.random(), active: Math.random() < 0.5, color: Math.random() < 0.75 ? accent : amber });
          }
        }
      }
    }

    function resize() {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    }

    function debouncedResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // draw links + packets
      links.forEach((link) => {
        const a = nodes[link.a];
        const b = nodes[link.b];
        if (!a || !b) return;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > LINK_DISTANCE * 1.3) return;

        const opacity = Math.max(0, 1 - dist / (LINK_DISTANCE * 1.3)) * 0.16;
        ctx.strokeStyle = `rgba(94, 234, 212, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        if (link.active && !prefersReduced) {
          link.t += PACKET_SPEED;
          if (link.t > 1) {
            link.t = 0;
            link.active = Math.random() < 0.5;
          }
          const px = a.x + (b.x - a.x) * link.t;
          const py = a.y + (b.y - a.y) * link.t;
          // Cheap glow: two flat fills instead of ctx.shadowBlur (which is
          // costly to rasterize every frame at 60fps).
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = `${link.color}33`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = link.color;
          ctx.fill();
        } else if (!link.active && Math.random() < 0.0008) {
          link.active = true;
          link.t = 0;
        }
      });

      // draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(151, 164, 179, 0.5)';
        ctx.fill();
      });
    }

    function step(time) {
      if (!paused) {
        if (time - lastTime >= FRAME_INTERVAL) {
          lastTime = time;
          draw();
        }
      }
      if (!prefersReduced) {
        raf = requestAnimationFrame(step);
      }
    }

    function onVisibilityChange() {
      paused = document.hidden;
    }

    resize();
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    if (prefersReduced) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(resizeTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-bg" aria-hidden="true" />;
}
