/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LogoFont: ["Abril Fatface", "serif"],
        NotoSerif: ["Noto Serif", "serif"],
        GreatVibes: ["Great Vibes", "serif"],
      }
    },
  },
  plugins: [],
}

