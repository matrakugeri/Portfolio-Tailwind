/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        responsive1: { max: "960px" },
        responsive2: { max: "720px" },
        responsive3: { max: "362px" },
      },
      gap: {
        flexGap: "2.5rem",
      },

      width: {
        128: "70rem",
        rWidth: "20rem",
        linkWidth: "24px",
      },
      spacing: {
        14: "3rem",
        "3xl": "30rem",
      },
      fontSize: {
        paragraphFont: "3rem",
        headingFont: "2rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        geist: ["Geist Mono", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionDelay: {
        400: "400ms",
      },
      colors: {
        brightBlue: "#081b29",
        darkBlue: "#017fb1",
        white: "#fff",
        headingColor: "#339af0",
        skillsColor: "#69db7c",
      },
      boxShadow: {
        "3xl": "0 4px 10px rgba(211, 220, 225, 0.7)",
      },
    },
  },
  plugins: [],
};
