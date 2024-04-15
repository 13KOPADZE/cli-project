module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mobile: "374px",

      tablet: "1024px",

      laptop: "1240px",

      desktop: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
