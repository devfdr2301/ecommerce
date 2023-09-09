/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1604px',
      },
      fontFamily: {
        'Sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'white': '#FFFFFF',
        'primary': '#767676',
        'secondary': '#262626',
        'DT':'#BEBEBE'
      },
  
    },
  },
  plugins: [],
}

