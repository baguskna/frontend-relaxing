/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "grey-0": "#fff",
      "grey-050": "#FAFBFC",
      "grey-200": "#EFF2F5",
      "grey-300": "#D0D9E0",
      "grey-400": "#7590A3",
      "grey-700": "#52697A",
      "grey-800": "#3D4F5C",
      "grey-900": "#1E272E",
      "blue-300": "#269CD9",
      white: "#fff",
    },
    screens: {
      sm: "600px",
      lg: "1024px",
      xl: "1400px",
    },
  },
  plugins: [],
};
