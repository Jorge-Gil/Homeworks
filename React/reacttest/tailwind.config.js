/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {  colors: {
      paleta: {
        AzulOscuro: '#00165B',
        grisclaro: '#EEEEEE',
        AzulFooter: '#001043',

      },
    
    }},
  },
  plugins: [],
}
