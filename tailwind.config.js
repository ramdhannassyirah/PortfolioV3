import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'momo': ['Momo Trust Sans', 'sans-serif'],
        'sixtyfour': ['Sixtyfour', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
