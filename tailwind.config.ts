import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hub: {
          50: '#f0fdf4',
          100: '#dcfce7',
          700: '#047857',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
