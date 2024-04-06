/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'my_bg_image': "url('/assets/images/hero.webp')",
        'footerbg': "url('/assets/images/footerbg.png')",
        'newsletter': "url('/assets/images/NWSLATTER.png')",
      },
      fontFamily: {
        'Exo': ' "Exo 2", sans-serif',
        'Outfit': '"Outfit", sans-serif',
        'Montserrat': '"Montserrat", sans-serif',

      }
    },
  },
  plugins: [],
};
