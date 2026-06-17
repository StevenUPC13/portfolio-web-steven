import { motion } from 'framer-motion';
import { FiAward, FiEye } from 'react-icons/fi';

export default function CertificateCard({ certificate, index, onView }) {
  return (
    <motion.article
      className="glass-card flex h-full flex-col p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-neon-purple/15 text-xl text-neon-cyan">
        <FiAward />
      </div>
      <span className="font-mono text-xs text-neon-purple">{certificate.category}</span>
      <h3 className="mt-2 flex-1 font-mono text-base font-bold leading-6 text-slate-100">{certificate.title}</h3>
      <p className="mt-3 text-sm text-slate-400">{certificate.issuer}</p>
      <p className="mt-1 text-sm text-slate-500">{certificate.date}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {certificate.skills.map((skill) => (
          <span key={skill} className="tech-tag">
            {skill}
          </span>
        ))}
      </div>
      <button type="button" className="btn-secondary-to-primary mt-5 justify-center" onClick={() => onView(certificate)}>
        <FiEye />
        Ver certificado
      </button>
    </motion.article>
  );
}
