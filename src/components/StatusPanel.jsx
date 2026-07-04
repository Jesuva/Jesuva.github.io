import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';

function Sparkline() {
  const pathRef = useRef(null);
  const [points] = useState(() => {
    // deterministic-looking "healthy latency" wobble
    const base = [18, 22, 16, 26, 20, 30, 24, 34, 22, 28, 18, 24];
    return base.map((v, i) => ({ x: (i / (base.length - 1)) * 260, y: 56 - v }));
  });

  const d = points.reduce(
    (acc, p, i) => (i === 0 ? `M${p.x},${p.y}` : `${acc} L${p.x},${p.y}`),
    ''
  );
  const area = `${d} L${points[points.length - 1].x},56 L0,56 Z`;

  return (
    <svg className="status-panel__sparkline" viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <motion.path
        ref={pathRef}
        d={d}
        stroke="#5eead4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      />
    </svg>
  );
}

export default function StatusPanel() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 350);
    return () => clearTimeout(t);
  }, []);

  const throughput = useCountUp(profile.status.throughput, { start: started, duration: 1800 });

  return (
    <motion.div
      className="status-panel"
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
    >
      <div className="status-panel__header">
        <span className="status-panel__title">system.status</span>
        <span className="status-panel__badge">
          <span className="status-panel__badge-dot" />
          {profile.status.label}
        </span>
      </div>

      <div className="status-panel__metrics">
        <div>
          <div className="status-panel__metric-label">Throughput</div>
          <div className="status-panel__metric-value status-panel__metric-value--accent">
            {throughput.toLocaleString()}+
          </div>
        </div>
        <div>
          <div className="status-panel__metric-label">Uptime</div>
          <div className="status-panel__metric-value">{profile.status.uptime}</div>
        </div>
      </div>

      <Sparkline />

      <div className="status-panel__footer">
        <span>last deploy</span>
        <strong>{profile.status.lastDeploy}</strong>
      </div>
    </motion.div>
  );
}
