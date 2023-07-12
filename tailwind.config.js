/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#ECD7F5",
        "light-skyblue": "#C5DDFE",
        "light-lavander": "#EED4F8",
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          300: "#262626",
          400: "#1C1B1F",
          500: "#030205",
          600: "#010101",
          DEFAULT: "#000000",
        },
        primary: {
          lightest: "#FFFBFE",
          lighter: "#F0E7FE",
          light: "#8541F6",
          DEFAULT: "var(--primary-color)",

          dark: "#6A14F4",
          darker: "#510EBA",
        },
        magenta: {
          light: "#CFB4FC",
          DEFAULT: "#E83CF7",
        },
        gray: {
          light: "#F4F5F7",
          DEFAULT: "#9B9B9B",
          dark: "#CFD8DC",
          darker: "#BCBDBE",
        },
        green: {
          light: "#78FAB1",
          lighter: "#D3FDE8",
        },
        red: {
          light: "#FF7276",
          DEFAULT: "#F42A41",
        },
      },
    },
  },
  plugins: [],
};
