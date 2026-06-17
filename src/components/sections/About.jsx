import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader.jsx';

const stats = ['75% avance académico', 'Tercio superior', 'Proyectos académicos y personales', 'Certificaciones en Data e IT'];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader number="02" title="About Me" />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-8 text-slate-300">
            Soy estudiante de Ingeniería de Sistemas de Información en la UPC, con formación en análisis de datos,
            programación, soporte TI y diseño de interfaces. Me interesa crear soluciones digitales funcionales,
            modernas y orientadas a resolver problemas reales.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tengo experiencia académica en desarrollo web, bases de datos, UX/UI, herramientas de análisis y proyectos
            tecnológicos. Me considero proactivo, adaptable, creativo y con alta capacidad de aprendizaje.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat}
                className="glass-card p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="font-mono text-sm text-neon-cyan">0{index + 1}</span>
                <p className="mt-2 font-semibold text-slate-100">{stat}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.pre
          className="code-card overflow-x-auto p-6 text-sm leading-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <code>{`const steven = {
  role: 'Systems Engineering Student',
  university: 'UPC',
  interests: [
    'Frontend',
    'UX/UI',
    'Data',
    'Backend',
    'IT Support'
  ],
  location: 'Lima, Perú',
  mindset: 'Build, learn and improve'
};`}</code>
        </motion.pre>
      </div>
    </section>
  );
}
