/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      principal: "#F2F3F4",
      primary: "#8758FF",
      white: "#FFFFFF",
      dark: "#00171F",
      "rich-black": "#00171F",
      "interactive-primary": "#F0EBFF",
      gray: "gray",
      neutral: "#E6E8E9",
    },
    fontFamily: {
      rebond: ["RebondGrotesque", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
