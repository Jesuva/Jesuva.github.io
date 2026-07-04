import { skills } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

function SkillGroup({ group, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="skills__group reveal"
      style={{ '--reveal-delay': `${(index % 4) * 70}ms` }}
    >
      <div className="skills__group-title">{group.category}</div>
      <div className="skills__tags">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="04 · stack"
          title="The toolbox, organized like a service manifest."
          sub="Grouped the way I'd actually reach for them — by the layer of the system they belong to."
        />

        <div className="skills__grid">
          {skills.map((g, i) => (
            <SkillGroup group={g} index={i} key={g.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
