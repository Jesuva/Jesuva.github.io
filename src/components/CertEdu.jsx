import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

function CertCard({ cert, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className="cert-card reveal"
      style={{ '--reveal-delay': `${index * 80}ms` }}
    >
      <span className="cert-card__icon">
        <Award size={18} />
      </span>
      <div>
        <div className="cert-card__name">{cert.name}</div>
        <div className="cert-card__meta">
          {cert.issuer} · {cert.date}
        </div>
      </div>
    </div>
  );
}

export default function CertEdu() {
  const [eduRef, eduVisible] = useReveal();

  return (
    <section id="credentials" className="section">
      <div className="container">
        <SectionHeading eyebrow="05 · credentials" title="Certifications & education." />

        <div className="cert-edu__grid">
          <div className="cert-list">
            {certifications.map((c, i) => (
              <CertCard cert={c} index={i} key={c.name} />
            ))}
          </div>

          <div ref={eduRef} data-visible={eduVisible} className="reveal edu-card">
            <span className="edu-card__icon">
              <GraduationCap size={20} />
            </span>
            <div className="edu-card__degree">{education.degree}</div>
            <div className="edu-card__school">{education.school}</div>
            <div className="edu-card__detail">{education.detail}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
