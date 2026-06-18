import { useState } from 'react';
import { FiDownload, FiLinkedin, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiSend } from 'react-icons/fi';
import CvModal from '../common/CvModal.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { socialLinks } from '../../data/socialLinks.js';

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showCv, setShowCv] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus({ type: 'error', message: 'Revisa los campos requeridos antes de enviar.' });
      return;
    }

    if (!formspreeEndpoint) {
      setStatus({
        type: 'error',
        message: 'Falta configurar VITE_FORMSPREE_ENDPOINT en el archivo .env.local.',
      });
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _replyto: formData.get('email'),
    };

    try {
      setIsSending(true);
      setStatus({ type: '', message: '' });

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Mensaje enviado correctamente. Gracias por contactarme.' });
    } catch {
      setStatus({
        type: 'error',
        message: 'No se pudo enviar el mensaje. Intenta nuevamente o escribeme por WhatsApp/correo.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeader number="07" title="Contact" />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a className="contact-card" href={`mailto:${socialLinks.email}`}>
            <FiMail />
            <span>
              <small>Email</small>
              {socialLinks.email}
            </span>
          </a>
          <a className="contact-card" href={socialLinks.phoneHref}>
            <FiPhone />
            <span>
              <small>Telefono</small>
              {socialLinks.phone}
            </span>
          </a>
          <a className="contact-card" href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
            <FiMessageCircle />
            <span>
              <small>WhatsApp</small>
              Chatear sobre oportunidades o proyectos
            </span>
          </a>
          <a className="contact-card" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
            <span>
              <small>LinkedIn</small>
              linkedin.com/in/steven-jeampierre-marquez-rios-349069381
            </span>
          </a>
          <div className="contact-card">
            <FiMapPin />
            <span>
              <small>Ubicacion</small>
              {socialLinks.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button type="button" className="btn-secondary" onClick={() => setShowCv(true)}>
              Ver CV
            </button>
            <a className="btn-primary" href={socialLinks.cv} download>
              <FiDownload />
              Descargar CV
            </a>
          </div>
        </div>

        <form className="glass-card space-y-4 p-5" onSubmit={submit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="form-input" name="name" placeholder="Nombre" required />
            <input className="form-input" name="email" type="email" placeholder="Email" required />
          </div>
          <input className="form-input" name="subject" placeholder="Asunto" required />
          <textarea className="form-input min-h-40 resize-y" name="message" placeholder="Mensaje" required />
          <button type="submit" className="btn-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={isSending}>
            <FiSend />
            {isSending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {status.message && (
            <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-neon-cyan'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>

      <CvModal open={showCv} onClose={() => setShowCv(false)} cvUrl={socialLinks.cv} />
    </section>
  );
}
