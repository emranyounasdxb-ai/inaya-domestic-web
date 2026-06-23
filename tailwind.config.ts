import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#07164A',
          50: '#F3F5FB',
          100: '#E6EAF6',
          500: '#162456',
          600: '#0D1C54',
          700: '#07164A',
          800: '#05103A',
          900: '#020A2C'
        },
        accent: {
          DEFAULT: '#BFA46A',
          50: '#FBF7EC',
          100: '#F4EAD1',
          500: '#BFA46A',
          600: '#9C7F3D',
          700: '#7A612B'
        },
        ivory: {
          DEFAULT: '#F8F6F0',
          100: '#EFE9DE'
        },
        ink: {
          DEFAULT: '#1D2430',
          deep: '#020A2C'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Cormorant Garamond', 'serif'],
        arabic: ['var(--font-arabic)', 'Noto Sans Arabic', 'Tahoma', 'sans-serif']
      },
      boxShadow: {
        glass: '0 22px 70px rgba(7, 22, 74, 0.08), 0 1px 0 rgba(255, 255, 255, 0.85) inset',
        premium: '0 28px 90px rgba(7, 22, 74, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
