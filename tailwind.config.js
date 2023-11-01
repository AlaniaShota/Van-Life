/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%)",
      },
      scale: {
        102: "1.02",
      },
      // screens: { sm: { max: "320px" }, md: { max: "768px" } },
      screens: {
        sm: "320px",
      },
    },
  },
  plugins: [],
};
