import { useReveal } from '../hooks/useReveal';

export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="reveal section-head-row"
      style={align === 'center' ? { justifyContent: 'center', textAlign: 'center' } : undefined}
    >
      <div style={align === 'center' ? { margin: '0 auto' } : undefined}>
        <div className="eyebrow" style={align === 'center' ? { justifyContent: 'center' } : undefined}>
          {eyebrow}
        </div>
        <h2 className="section-heading" style={align === 'center' ? { margin: '0 auto' } : undefined}>
          {title}
        </h2>
        {sub && <p className="section-sub" style={align === 'center' ? { margin: '14px auto 0' } : undefined}>{sub}</p>}
      </div>
    </div>
  );
}
