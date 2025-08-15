/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        responsive1: { max: "1220px" },
        responsive2: { max: "840px" },
        responsive3: { max: "340px" },
        responsiveIcons: { max: "450px" },
        responsiveGrid: { max: "760px" },
        responsiveGrid2: { max: "580px" },
        responsiveGrid3: { max: "400px" },
      },
      margin: {
        custom1: "2rem",
        custom2: "5rem",
        custom3: "8rem",
      },
      gap: {
        flexGap: "2.5rem",
      },

      width: {
        imgWidth: "70rem",
        rWidth: "20rem",
        linkWidth: "24px",
        gridWidth: "15rem",
      },
      height: {
        picHeight: "10rem",
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
        mozilla: ["Mozilla Headline", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
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
        PopColor: "#d8f5a2",
        cyanColor: "#228be6",
        greenColor: "#000046",
        lightgreenColor: "#1CB5E0",
      },
      boxShadow: {
        "3xl": "0 4px 10px rgba(211, 220, 225, 0.7)",
        sampleShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        hardShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        heavyShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      },
      dropShadow: {
        "blue-glow": "2px 5px 5px rgba(0, 128, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
