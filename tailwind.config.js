/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#9538E2',
        'blacktext': '#09080F',
        'whitetext': '#F6F6F6',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

