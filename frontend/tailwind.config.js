module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 50: "#f7f9fc", 200: "#e5e8ea", 900: "#0c141c" },
        blue: { 600: "#197fe5" },
        blue_gray: { 50: "#e8edf2", 500: "#4f7296" },
      },
      boxShadow: {},
      fontFamily: { publicsans: "Public Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
