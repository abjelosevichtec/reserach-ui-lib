/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#ff7230",
      },
      gridTemplateColumns: {
        header: "min-content 700px 1fr",
      },
    },
  },
  plugins: [],
};
