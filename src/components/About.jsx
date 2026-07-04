import { profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const FACTS = [
  { label: 'Experience', value: '5+ years' },
  { label: 'Current role', value: 'SDE II @ High-Growth SaaS Platform' },
  { label: 'Focus', value: 'Full Stack · Tech writer · AI Engineering' },
  { label: 'Location', value: profile.location },
  { label: 'Remote', value: 'Yes — fully remote track record' }
];

export default function About() {
  const [textRef, textVisible] = useReveal();
  const [factsRef, factsVisible] = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 · about"
          title="I make growing systems stop breaking."
        />

        <div className="about__grid">
          <p ref={textRef} data-visible={textVisible} className="reveal about__text">
            <strong>{profile.summary}</strong> Most of my work sits at the intersection
            of reliability and speed — keeping a notification pipeline healthy at
            two million messages a day, or shaving a Lighthouse score back up after
            a platform outgrew its own frontend. I care less about the label on the
            ticket and more about whether the system holds under real traffic.
          </p>

          <div ref={factsRef} data-visible={factsVisible} className="reveal about__facts" style={{ '--reveal-delay': '120ms' }}>
            {FACTS.map((f) => (
              <div className="about__fact" key={f.label}>
                <span className="about__fact-label">{f.label}</span>
                <span className="about__fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
