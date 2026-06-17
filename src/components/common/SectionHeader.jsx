import { motion } from 'framer-motion';

export default function SectionHeader({ number, title }) {
  return (
    <motion.div
      className="mb-10 flex flex-wrap items-center gap-4 md:mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55 }}
    >
      <span className="font-mono text-xl font-bold text-neon-purple md:text-3xl">{number}</span>
      <h2 className="font-mono text-3xl font-bold text-slate-100 md:text-5xl">
        <span className="text-neon-purple">&lt;</span>
        <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
          {title}
        </span>
        <span className="text-neon-cyan"> /&gt;</span>
      </h2>
      <div className="h-px min-w-24 flex-1 bg-gradient-to-r from-neon-purple/70 to-neon-cyan/10" />
    </motion.div>
  );
}
