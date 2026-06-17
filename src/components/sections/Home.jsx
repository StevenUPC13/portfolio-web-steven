import { motion } from 'framer-motion';
import { FiAward, FiBarChart2, FiBriefcase, FiDownload, FiMail } from 'react-icons/fi';
import { FaFigma, FaPython, FaReact } from 'react-icons/fa';
import { SiJavascript, SiPostgresql } from 'react-icons/si';
import TypewriterName from '../common/TypewriterName.jsx';
import { socialLinks } from '../../data/socialLinks.js';

const techCards = [
  { label: 'React', icon: FaReact, className: 'left-14 top-12' },
  { label: 'JavaScript', icon: SiJavascript, className: 'right-0 top-12' },
  { label: 'Python', icon: FaPython, className: 'left-[-5%] top-[47%]' }, 
  { label: 'SQL', icon: SiPostgresql, className: 'right-[-5%] top-[47%]' },
  { label: 'Figma', icon: FaFigma, className: 'left-16 bottom-4' },
  { label: 'Power BI', icon: FiBarChart2, className: 'right-0 bottom-4' },
];

export default function Home() {
  return (
    <section id="home" className="section-shell flex min-h-[calc(100vh-4rem)] items-center pt-20 lg:pt-16">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <TypewriterName name="Steven" />
          <h1 className="mt-5 font-mono text-5xl font-black leading-[0.98] md:text-7xl xl:text-8xl">
            <span className="text-neon-purple">const</span>{' '}
            <span className="text-slate-100">Developer</span>{' '}
            <span className="text-neon-cyan">=</span>
            <br />
            <span className="animate-gradientMove bg-gradient-to-r from-neon-purple via-lime-200 to-neon-cyan bg-[length:200%_200%] bg-clip-text text-transparent">
              &quot;Steven&quot;;
            </span>
          </h1>
          <p className="mt-6 max-w-4xl font-mono text-lg leading-8 text-neon-cyan md:text-2xl">
            Systems Engineering Student | Frontend & UX/UI | Data & IT Support
          </p>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Estudiante de Ingeniería de Sistemas de Información en UPC, enfocado en crear soluciones web modernas,
            interfaces intuitivas y proyectos basados en datos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn-primary" href="#contact">
              <FiMail />
              Contactarme
            </a>
            <a className="btn-secondary" href="#projects">
              <FiBriefcase />
              Ver proyectos
            </a>
            <a className="btn-secondary" href="#certificates">
              <FiAward />
              Certificados
            </a>
            <a className="btn-secondary" href={socialLinks.cv} download>
              <FiDownload />
              Descargar CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]"
        >
          <div className="absolute inset-8 rounded-full border border-neon-cyan/30 bg-dark-deep/70 shadow-cyanGlow backdrop-blur" />
          <div className="absolute inset-16 rounded-full border border-neon-purple/40 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 shadow-glow" />
          <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-dark-card text-6xl font-black text-neon-cyan shadow-glow">
            &lt;/&gt;
          </div>
          {techCards.map(({ label, icon: Icon, className }, index) => (
            <motion.div
              key={label}
              className={`absolute ${className} glass-card flex min-w-32 items-center gap-2 px-5 py-4 font-mono text-2xl font-bold text-slate-100`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
            >
              <Icon className="text-neon-cyan" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
