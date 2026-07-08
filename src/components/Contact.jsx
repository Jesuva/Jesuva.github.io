import { ArrowUpRight, Mail, Linkedin, PenLine, Phone } from 'lucide-react';
import { profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container reveal" ref={ref} data-visible={visible} style={{ '--reveal-delay': '0ms' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          07 · contact
        </div>
        <h2 className="contact__heading reveal" ref={ref} data-visible={visible} style={{ '--reveal-delay': '60ms' }}>
          Have a system that's <span>outgrowing itself?</span>
        </h2>
        <p className="contact__sub reveal" ref={ref} data-visible={visible} style={{ '--reveal-delay': '120ms' }}>
          I'm open to conversations about senior full-stack and backend roles —
          especially where reliability and scale are the interesting part of the problem.
        </p>

        <div className="contact__actions reveal" ref={ref} data-visible={visible} style={{ '--reveal-delay': '180ms' }}>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Say hello <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="contact__channels reveal" ref={ref} data-visible={visible} style={{ '--reveal-delay': '240ms' }}>
          <a className="contact__channel" href={`mailto:${profile.email}`}>
            <Mail size={15} /> {profile.email}
          </a>
          <a className="contact__channel" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> linkedin.com/in/jesuva
          </a>
          <a className="contact__channel" href={profile.medium} target="_blank" rel="noreferrer">
            <PenLine size={15} /> medium.com/@jesuva
          </a>
        </div>
      </div>
    </section>
  );
}
