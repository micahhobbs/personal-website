/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://www.youtube.com/watch?v=VcW3T9EOo5M
  darkMode: "class",
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        "tania-light-grey": "#EEEEEE",
        "tania-dark-grey": "#181818",
        "tania-dark-font": "#252525",
        "tania-light-font": "#FFFFFF",
        "tania-border-color": "#DDD",
        "dark-mode-border-color": "#2c2c2c",
        "tania-card-background": "#F9F9F9",
        "dark-mode-bg": "#181818",
        "dark-mode-card-bg": "#1F1F1F",
        "blue-underline": "#6EA9F1",
      },
    },
  },
  plugins: [],
}

// TODO redo this using POSTCSS and not CLI option
