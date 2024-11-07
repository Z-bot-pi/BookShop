/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   colors: {
     'primary': '#FF6363',
     'secondary': '#0D0842',
     'blackBG': '#F3F3F3',
     'Favorite': '#FF6363', 
    },
    fontFamily: {
      'primary': ["Montserrat Alternates", "sans-serif"],
      'secondary': ["Nunito Sans", "sans-serif"]
      
    },
  },
},
  plugins: [],
}