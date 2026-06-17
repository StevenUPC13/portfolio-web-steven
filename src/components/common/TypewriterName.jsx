import { useEffect, useState } from 'react';

export default function TypewriterName({ name = 'Steven' }) {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const delay = deleting ? 75 : 130;
    const pause = text === name && !deleting ? 1100 : text === '' && deleting ? 420 : delay;
    const timer = window.setTimeout(() => {
      if (!deleting && text.length < name.length) {
        setText(name.slice(0, text.length + 1));
      } else if (!deleting && text === name) {
        setDeleting(true);
      } else if (deleting && text.length > 0) {
        setText(name.slice(0, text.length - 1));
      } else {
        setDeleting(false);
      }
    }, pause);

    return () => window.clearTimeout(timer);
  }, [deleting, name, text]);

  return (
    <span className="font-mono text-lg text-neon-cyan md:text-2xl">
      <span className="text-slate-300">Hello, I&apos;m </span>
      <span className="text-neon-cyan">{text}</span>
      <span className="ml-1 inline-block animate-blink text-neon-purple">|</span>
    </span>
  );
}
