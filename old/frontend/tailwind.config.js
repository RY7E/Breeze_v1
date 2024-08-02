/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"], //won't work 
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
