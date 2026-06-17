import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [certificate, onClose]);

  const modal = (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-16 z-[70] flex items-start justify-center bg-dark-deep/90 p-3 backdrop-blur md:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative h-[calc(100dvh-5.5rem)] w-full max-w-6xl overflow-hidden rounded-lg border border-neon-cyan/25 bg-dark-secondary shadow-glow"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-20 items-center justify-between gap-4 border-b border-neon-cyan/20 bg-dark-primary/95 p-4">
              <div className="min-w-0">
                <p className="font-mono text-sm text-neon-cyan">{certificate.category}</p>
                <h3 className="truncate font-mono text-base font-bold text-slate-100 md:text-lg">
                  {certificate.title}
                </h3>
              </div>
              <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar certificado">
                <FiX />
              </button>
            </div>
            <div className="h-[calc(100%-116px)] bg-dark-deep">
              <iframe
                title={certificate.title}
                src={`${certificate.pdf}#toolbar=1&navpanes=0`}
                className="h-full w-full border-0 bg-white"
              />
            </div>
            <p className="border-t border-neon-cyan/20 bg-dark-primary/95 px-4 py-3 text-xs text-slate-500">
              Vista PDF del certificado. Documento confidencial para verificación. Prohibida su edición, alteración o uso no autorizado.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
