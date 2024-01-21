/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImage': "url('/src/assets/agenc-Banner 1.png')",
       
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}

