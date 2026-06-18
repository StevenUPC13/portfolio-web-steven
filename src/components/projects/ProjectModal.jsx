import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiExternalLink, FiGithub, FiLock, FiX } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  const modal = (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-16 z-[70] flex items-start justify-center bg-dark-deep/90 p-3 backdrop-blur md:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.article
            className="relative max-h-[calc(100dvh-5.5rem)] w-full max-w-5xl overflow-y-auto rounded-lg border border-neon-cyan/25 bg-black/90 shadow-glow"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-neon-cyan/20 bg-dark-primary/95 p-4">
              <div className="min-w-0">
                <p className="font-mono text-sm text-neon-cyan">{project.status}</p>
                <h3 className="mt-1 font-mono text-lg font-bold text-slate-100 md:text-2xl">{project.title}</h3>
              </div>
              <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar detalles">
                <FiX />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[0.95fr_1.05fr]">
              <img
                src={project.image}
                alt=""
                className="h-56 w-full rounded-lg border border-neon-cyan/15 object-cover sm:h-64 lg:h-72"
              />

              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-slate-500">Rol</p>
                <p className="mt-1 font-semibold text-neon-cyan">{project.role}</p>

                <p className="mt-5 leading-7 text-slate-300">{project.details || project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.github ? (
                    <a className="btn-mini" href={project.github} target="_blank" rel="noreferrer">
                      <FiGithub />
                      Repositorio
                    </a>
                  ) : (
                    <span className="btn-mini-disabled">
                      <FiLock />
                      GitHub pendiente
                    </span>
                  )}
                  {project.demo ? (
                    <a className="btn-mini" href={project.demo} target="_blank" rel="noreferrer">
                      <FiExternalLink />
                      Ver demo
                    </a>
                  ) : (
                    <span className="btn-mini-disabled">
                      <FiLock />
                      Demo pendiente
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-neon-cyan/15 px-5 pb-5">
              <h4 className="mt-5 font-mono text-sm font-bold text-slate-100">Puntos clave</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
