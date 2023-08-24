/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Cutive Mono', 'monospace'],
      logo: 'The Rivers Regular',
      dida: 'Dida',
    },
    extend: {
      screens: {
        xs: '375px',
        sm: '412px',
        md: '768px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3440px',
      },
    },
  },
  plugins: [],
};
