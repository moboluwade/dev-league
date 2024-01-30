/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-dev-light-orange': '#FFF6F3',
        'text-dev-orange': '#FD4F13',
        'text-dev-faded-base': 'rgba(18, 20, 29, 0.6)',
        'dev-black': '#292422',
        'dev-dark-brown': '#292422',
        pinkish: '#FFF6F3',
        neutral400: '#C5BDB9',
        neutral600: '#7A6C65',
        neutral800: '#292422',
        neutral900: '#101828',
        neutralGrey: '#F3F3F3',
        primary500: '#FD4F13',
        primary600: '#EC3E02',
        primary700: '#B91C1C',
        gray700: '#534F4B',
        grey700: '#344054',
        error50: '#FEF3F2',
        gray600: '#D4CECB',
        lightPink: '#FFF6F3',
      },
      boxShadow: {
        input: '0px 4px 80px 0px rgba(0, 0, 0, 0.06)',
      },
      font: {
        Manrope: ['Manrope', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
