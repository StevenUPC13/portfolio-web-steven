import { useMemo, useState } from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import CertificateCard from '../certificates/CertificateCard.jsx';
import CertificateModal from '../certificates/CertificateModal.jsx';
import { certificates } from '../../data/certificates.js';

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const categories = useMemo(() => ['Todos', ...new Set(certificates.map((cert) => cert.category))], []);
  const filtered =
    activeCategory === 'Todos' ? certificates : certificates.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certificates" className="section-shell">
      <SectionHeader number="06" title="Certificates" />
      <div className="mb-7 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-neon-purple/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((certificate, index) => (
          <CertificateCard key={certificate.title} certificate={certificate} index={index} onView={setSelected} />
        ))}
      </div>
      <p className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-400">
        Los certificados se muestran únicamente con fines de verificación profesional dentro de este portafolio.
        Queda prohibida su reproducción, alteración, edición, comercialización o uso para suplantación de identidad,
        incluyendo la modificación de nombres, códigos, fechas, firmas o cualquier dato del documento. Las versiones
        públicas incluyen marca de agua como medida de protección. Si necesitas una copia digital o física
        verificable, por favor contáctame para coordinar la entrega por un canal oficial.
      </p>
      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
