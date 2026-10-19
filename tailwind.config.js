/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ikea: {
          blue: '#0058a3',
          darkBlue: '#003e73',
          yellow: '#ffdb00',
          darkYellow: '#f5c600',
          warmBg: '#fbfaf8',
          cardBg: '#f7f6f2',
          pillBg: '#e8f4fd',
          textMuted: '#585858',
          textDark: '#111111',
          greenBg: '#e3f3e6',
          greenDark: '#1e6834',
          footerDark: '#0b202c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
