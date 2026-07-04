import { useEffect, useRef, useState } from 'react';
import { experience } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

function TimelineItem({ job, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="timeline__item reveal"
      style={{ '--reveal-delay': `${index * 80}ms` }}
    >
      <span className="timeline__dot" />
      <div className="timeline__meta">
        <span className="timeline__period">{job.period}</span>
        {job.current && <span className="timeline__current">current</span>}
      </div>
      <h3 className="timeline__role">{job.role}</h3>
      <p className="timeline__company">
        <strong>{job.company}</strong> · {job.location}
      </p>
      <p className="timeline__summary">{job.summary}</p>
      <div className="timeline__bullets">
        {job.bullets.map((b) => (
          <p className="timeline__bullet" key={b.slice(0, 24)}>
            {b}
          </p>
        ))}
      </div>
      <div className="timeline__tags">
        {job.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const lineWrapRef = useRef(null);
  const [fill, setFill] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      const node = lineWrapRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height;
      const traveled = Math.min(Math.max(viewportH * 0.75 - rect.top, 0), total);
      setFill(total > 0 ? traveled / total : 0);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        measure();
        rafRef.current = null;
      });
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="02 · experience"
          title="Where the last five years went."
          sub="Chronological, warts and all — the roles that shaped how I think about systems."
        />

        <div className="timeline" ref={lineWrapRef}>
          <div className="timeline__line">
            <div className="timeline__line-fill" style={{ '--fill': fill }} />
          </div>
          {experience.map((job, i) => (
            <TimelineItem job={job} index={i} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
