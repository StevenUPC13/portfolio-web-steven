import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socialLinks } from '../../data/socialLinks.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark-secondary/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-slate-200">© 2026 Steven J. Márquez Rios. Built with passion and code.</p>
          <p className="mt-1 font-mono text-neon-cyan">by &lt;Steven /&gt;</p>
        </div>
        <div className="flex justify-center gap-3">
          <a className="footer-icon" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a
            className="footer-icon"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a className="footer-icon" href={`mailto:${socialLinks.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
