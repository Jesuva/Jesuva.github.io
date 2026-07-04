import { useEffect, useMemo, useRef, useState } from 'react';
import { profile } from '../data/content';

const SECTIONS = [
  { id: 'about', label: 'about', hint: 'who I am' },
  { id: 'experience', label: 'experience', hint: 'career timeline' },
  { id: 'systems', label: 'systems', hint: 'flagship builds' },
  { id: 'skills', label: 'stack', hint: 'tools & languages' },
  { id: 'writing', label: 'writing', hint: 'notes on medium' },
  { id: 'contact', label: 'contact', hint: 'say hello' }
];

export default function Nav() {
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  const commands = useMemo(
    () => [
      ...SECTIONS.map((s) => ({ ...s, type: 'section' })),
      { id: 'resume', label: 'resume.pdf', hint: 'download résumé', type: 'action' },
      { id: 'mail', label: 'mail', hint: profile.email, type: 'action' },
      { id: 'linkedin', label: 'linkedin', hint: 'connect', type: 'action' }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  }, [commands, query]);

  // Scrollspy — keeps the closed prompt's path in sync with the section in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // A small dev-flavored touch: Cmd/Ctrl+K or "/" opens the prompt from anywhere.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      const isTypingElsewhere = (tag === 'INPUT' || tag === 'TEXTAREA') && document.activeElement !== inputRef.current;
      if (isTypingElsewhere) return;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === '/' && !open) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setHighlight(0);
      const raf = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(raf);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    setHighlight(0);
  }, [query]);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.type === 'section') {
      document.getElementById(cmd.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (cmd.id === 'resume') {
      window.open(profile.resumeFile, '_blank', 'noopener');
    } else if (cmd.id === 'mail') {
      window.location.href = `mailto:${profile.email}`;
    } else if (cmd.id === 'linkedin') {
      window.open(profile.linkedin, '_blank', 'noopener');
    }
    setOpen(false);
  };

  const onInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(filtered.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(filtered[highlight]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const activeSection = SECTIONS.find((s) => s.id === active);

  return (
    <div className="term-nav-wrap" ref={wrapRef}>
      <button
        type="button"
        className={`term-nav ${open ? 'term-nav--open' : ''}`}
        onClick={() => setOpen(true)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Open section navigation"
      >
        {!open ? (
          <span className="term-nav__prompt">
            <span className="term-nav__user">guest@jesuva</span>
            <span className="term-nav__sep">:</span>
            <span className="term-nav__path">~/{activeSection?.label ?? 'about'}</span>
            <span className="term-nav__dollar">$</span>
            <span className="term-nav__cursor" aria-hidden="true" />
          </span>
        ) : (
          <span className="term-nav__prompt">
            <span className="term-nav__sep">cd</span>
            <span className="term-nav__path">~/</span>
            <input
              ref={inputRef}
              className="term-nav__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              spellCheck={false}
              autoComplete="off"
              placeholder="jump to..."
              aria-label="Jump to section"
            />
          </span>
        )}
      </button>

      {open && (
        <div className="term-menu" role="listbox">
          {filtered.length === 0 && (
            <div className="term-menu__empty">no match — try "systems" or "resume"</div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              type="button"
              role="option"
              aria-selected={i === highlight}
              className={`term-menu__item ${i === highlight ? 'term-menu__item--active' : ''}`}
              onMouseEnter={() => setHighlight(i)}
              onClick={() => runCommand(cmd)}
            >
              <span className="term-menu__cmd">
                {cmd.type === 'section' ? 'cd' : 'open'} ./{cmd.label}
              </span>
              <span className="term-menu__hint">{cmd.hint}</span>
              {cmd.id === active && <span className="term-menu__tag">here</span>}
            </button>
          ))}
          <div className="term-menu__footer">
            <span>
              <kbd>&uarr;</kbd>
              <kbd>&darr;</kbd> navigate
            </span>
            <span>
              <kbd>&crarr;</kbd> select
            </span>
            <span>
              <kbd>esc</kbd> close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
