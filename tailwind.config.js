/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080c',
          900: '#0b0d13',
          800: '#12151e',
          700: '#1a1f2c',
          600: '#242b3a',
        },
        mist: {
          50: '#f7f8fb',
          100: '#e8ebf2',
          300: '#b4bccb',
          400: '#8b95a8',
        },
        accent: {
          cyan: '#5eead4',
          blue: '#7dd3fc',
          violet: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(94, 234, 212, 0.12)',
        card: '0 18px 50px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(94, 234, 212, 0.08), transparent), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(167, 139, 250, 0.10), transparent), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(125, 211, 252, 0.06), transparent)',
      },
    },
  },
  plugins: [],
}
