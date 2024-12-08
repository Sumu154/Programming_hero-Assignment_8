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
        'green': '#309C08',
        'backgreen': 'rgba(48, 156, 8, 0.10)',
        'blacktext': '#09080F',
        'whitetext': '#F6F6F6',
        'rating': '#F9C004',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

