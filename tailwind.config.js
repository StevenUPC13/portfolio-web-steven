/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#020403',
          secondary: '#06110B',
          card: '#0B1710',
          deep: '#000000',
        },
        neon: {
          purple: '#39FF14',
          cyan: '#00FF66',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 28px rgba(57, 255, 20, 0.26)',
        cyanGlow: '0 0 30px rgba(0, 255, 102, 0.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        gradientMove: 'gradientMove 8s ease infinite',
      },
    },
  },
  plugins: [],
};
