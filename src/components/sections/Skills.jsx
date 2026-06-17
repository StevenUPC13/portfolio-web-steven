import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader.jsx';
import { skillBars, skillGroups } from '../../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader number="03" title="Skills" />
      <div className="grid gap-5 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="glass-card p-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3 className="font-mono text-lg font-bold text-neon-cyan">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skillBars.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="glass-card p-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="mb-2 flex items-center justify-between font-mono text-sm">
              <span className="font-semibold text-slate-100">{skill.name}</span>
              <span className="font-bold text-neon-cyan">{skill.percent}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full border border-neon-cyan/10 bg-black/80 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan shadow-[0_0_18px_rgba(0,255,102,0.45)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Los porcentajes son referencias visuales para el portafolio, no una certificación formal de dominio.
      </p>
    </section>
  );
}
