import { useMemo, useState } from 'react';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '../../hooks/useActiveSection.js';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => links.map((link) => link.id), []);
  const active = useActiveSection(sectionIds);

  const goTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon-cyan/15 bg-dark-primary/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <button type="button" onClick={() => goTo('home')} className="font-mono text-lg font-bold">
          <span className="text-neon-purple">&lt;</span>
          <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Steven
          </span>
          <span className="text-neon-cyan"> /&gt;</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                active === link.id
                  ? 'border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan shadow-cyanGlow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-neon-cyan/15 bg-white/5 px-3 text-sm text-slate-300"
            title="Idioma preparado para futura version en ingles"
          >
            <FiGlobe />
            ES
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-neon-cyan/15 bg-white/5 text-slate-100 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`border-t border-neon-cyan/15 bg-dark-secondary/95 px-4 py-3 backdrop-blur-xl transition lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goTo(link.id)}
            className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold ${
              active === link.id ? 'bg-neon-cyan/10 text-neon-cyan' : 'text-slate-300'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
