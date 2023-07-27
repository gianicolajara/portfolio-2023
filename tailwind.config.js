/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundSize: {
        "size-100": "100% 100%",
        "size-200": "200% 200%",
        "size-300": "300% 300%",
      },
      keyframes: {
        backgroundSpin: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },

      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        "background-light": "var(--background-light)",
        "gray-light": "var(--gray-light)",
        "circle-light": "var(--circle-light)",
        "circle": "var(--circle)",
        "title": "var(--title)",
        "font": "var(--font)",
        "icon": "var(--icon)",
      },
    },
  },
  plugins: [],
};
