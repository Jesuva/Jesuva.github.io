import { systems } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

function SystemCard({ system, index }) {
  const [ref, visible] = useReveal();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="system-card reveal"
      style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
      onMouseMove={handleMouseMove}
    >
      <div className="system-card__org">{system.org}</div>
      <h3 className="system-card__name">{system.name}</h3>
      <p className="system-card__desc">{system.description}</p>
      <div className="system-card__metric">
        <div className="system-card__metric-value">{system.metric}</div>
        <div className="system-card__metric-label">{system.metricLabel}</div>
      </div>
      <div className="system-card__tags">
        {system.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Systems() {
  return (
    <section id="systems" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 · systems"
          title="Flagship builds, by the numbers."
          sub="Six systems I've owned end-to-end — each one picked because the metric tells the story better than the job title."
        />

        <div className="systems__grid">
          {systems.map((s, i) => (
            <SystemCard system={s} index={i} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
