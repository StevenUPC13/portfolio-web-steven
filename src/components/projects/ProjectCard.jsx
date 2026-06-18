import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiInfo, FiLock } from 'react-icons/fi';

export default function ProjectCard({ project, index, onDetails }) {
  const hasGithub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  return (
    <motion.article
      className="group glass-card overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-dark-deep">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/90 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-md bg-dark-primary/80 px-3 py-1 font-mono text-xs text-neon-cyan backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-mono text-lg font-bold text-slate-100">{project.title}</h3>
        <p className="mt-3 min-h-24 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" className="btn-mini" onClick={() => onDetails(project)}>
            <FiInfo />
            Detalle
          </button>
          {hasGithub ? (
            <a className="btn-mini" href={project.github} target="_blank" rel="noreferrer">
              <FiGithub />
              GitHub
            </a>
          ) : (
            <span className="btn-mini-disabled">
              <FiLock />
              GitHub pendiente
            </span>
          )}
          {hasDemo ? (
            <a className="btn-mini" href={project.demo} target="_blank" rel="noreferrer">
              <FiExternalLink />
              Demo
            </a>
          ) : (
            <span className="btn-mini-disabled">
              <FiLock />
              Demo pendiente
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
