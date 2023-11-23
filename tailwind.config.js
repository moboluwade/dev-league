/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'text-dev-light-orange': '#FFF6F3',
       'text-dev-orange': '#FD4F13',
       'text-dev-faded-base': '#12141D'
      },
      boxShadow:{
        'input': '0px 4px 80px 0px rgba(0, 0, 0, 0.06)'
      },
    },
  },
  plugins: [],
}

