import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const symbols = ['</>', '{}', 'const', '@', '#', '()', ';', 'SQL', 'UX', 'API'];

export default function AnimatedBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: { value: 150, density: { enable: true, area: 950 } },
        color: { value: ['#39FF14', '#00FF66', '#E5E7EB'] },
        opacity: { value: { min: 0.08, max: 0.28 } },
        size: { value: { min: 4, max: 5.5 } },
        move: { enable: true, speed: 0.35, direction: 'none', outModes: { default: 'bounce' } },
        links: {
          enable: true,
          color: '#00FF66',
          opacity: 0.08,
          distance: 145,
          width: 1,
        },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 90, duration: 0.4 } },
      },
    }),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.045)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="absolute -left-36 top-20 h-80 w-80 rounded-full bg-neon-purple/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-neon-cyan/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      {ready && <Particles id="portfolio-particles" className="absolute inset-0" options={options} />}
      {symbols.map((symbol, index) => (
        <span
          key={symbol}
          className="absolute hidden select-none font-mono text-3xl font-black text-neon-cyan/10 md:block lg:text-3xl"
          style={{
            left: `${8 + ((index * 13) % 86)}%`,
            top: `${12 + ((index * 17) % 76)}%`,
            animation: `float ${5 + (index % 4)}s ease-in-out infinite`,
            animationDelay: `${index * 0.55}s`,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
