/** @type {import('tailwindcss').Config} */

import module from "module";

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "in-up": {
          from: {
            opacity: 0.5,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animate: {
        "in-up": "in-up 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
