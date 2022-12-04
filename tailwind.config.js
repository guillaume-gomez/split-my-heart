const COLORS = ['gray', 'red','yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
const VARIANTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const safelist = []
COLORS.forEach((color) => {
  VARIANTS.forEach((variant) => {
    safelist.push(`bg-${color}-${variant}`)
  })
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist
  },
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: {
          "primary": "#DD2D4A",
          "secondary": "#CBEEF3",
          "accent": "#880D1E",
          "neutral": "#F26A8D",
          "base-100": "#F49CBB",
          "info": "#66C7FF",
          "success": "#87D039",
          "warning": "#E3D664",
          "error": "#FF1515",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
