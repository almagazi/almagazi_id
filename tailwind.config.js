import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // Add 'Inter' as the default sans-serif font
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};