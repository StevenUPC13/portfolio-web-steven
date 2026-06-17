import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader.jsx';
import { experience } from '../../data/experience.js';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader number="04" title="Experience" />
      <div className="relative ml-3 border-l border-neon-purple/40 pl-8">
        {experience.map((item, index) => (
          <motion.article
            key={item.title}
            className="relative mb-8 last:mb-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-dark-primary bg-neon-cyan shadow-cyanGlow" />
            <div className="glass-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-neon-purple/15 px-3 py-1 font-mono text-xs font-bold text-neon-cyan">
                  {item.period}
                </span>
                <span className="text-sm text-slate-400">{item.context}</span>
              </div>
              <h3 className="mt-3 font-mono text-xl font-bold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-neon-purple">{item.role}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
