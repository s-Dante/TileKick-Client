/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Podemos definir colores temáticos para TileKick aquí
        primary: '#2563eb',
        dark: '#111827',
      }
    },
  },
  plugins: [],
}