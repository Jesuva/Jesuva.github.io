import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, PenLine, Mail } from 'lucide-react';
import { profile } from '../data/content';
import StatusPanel from './StatusPanel';

function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setText(words[0]);
      return undefined;
    }

    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } })
};

export default function Hero() {
  const typed = useTypewriter(profile.taglineWords);
  const maxTaglineLen = Math.max(...profile.taglineWords.map((w) => w.length));

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <motion.span className="hero__kicker" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span aria-hidden="true">$</span> whoami — open to new challenges
          </motion.span>

          <motion.h1 className="hero__name" variants={fadeUp} initial="hidden" animate="show" custom={0.08}>
            {profile.name.split(' ')[0]} <span className="hero__name-accent">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div className="hero__role-row" variants={fadeUp} initial="hidden" animate="show" custom={0.16}>
            <span className="hero__role-label">{profile.role}</span>
            <span>building</span>
            <span className="hero__typed" style={{ '--typed-ch': maxTaglineLen }}>
              {typed}
              <span className="hero__cursor" aria-hidden="true" />
            </span>
          </motion.div>

          <motion.p className="hero__summary" variants={fadeUp} initial="hidden" animate="show" custom={0.24}>
            {profile.summary}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} initial="hidden" animate="show" custom={0.32}>
            <a
              className="btn btn--primary"
              href="#systems"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View the work
            </a>
            <a className="btn btn--ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
              Download résumé <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div className="hero__social" variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
            <a className="hero__social-link" href={`mailto:${profile.email}`}>
              <Mail size={14} /> {profile.email}
            </a>
            <a className="hero__social-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a className="hero__social-link" href={profile.medium} target="_blank" rel="noreferrer">
              <PenLine size={14} /> Medium
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <StatusPanel />
        </motion.div>
      </div>

      <div className="scroll-cue">
        <span>scroll</span>
        <span className="scroll-cue__line" />
      </div>
    </section>
  );
}
