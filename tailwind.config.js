/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://www.youtube.com/watch?v=VcW3T9EOo5M
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        'basecamp-green': '#2da530',
        'basecamp-sand': '#f0f0e9',
      },
    },
  },
  plugins: [],
}

// TODO redo this using POSTCSS and not CLI option
