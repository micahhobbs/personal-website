/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://www.youtube.com/watch?v=VcW3T9EOo5M
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        "tania-light-grey": "#EEEEEE",
        "tania-dark-grey": "#181818",
        "tania-dark-font": "#252525",
        "tania-light-font": "#FFFFFF",
        "tania-border-color": "#DDD",
        "tania-card-background": "#F9F9F9"
        
      },
    },
  },
  plugins: [],
}

// TODO redo this using POSTCSS and not CLI option
