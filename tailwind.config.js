/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
      },
      fontWeight: {
        medium: '500', 
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(90deg, #CACACA 0%, #919191 50%, #CACACA 100%)',
        'hero-text-gradient':'linear-gradient(282deg, #FFF -24.49%, rgba(255, 255, 255, 0.00) 173.09%)',
      },
      colors: {
        'li-bg': '#000', 
        'offwhite':'#d6d6d6',
      },
    },
  },
  plugins: [],
}