/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "var(--font-color-main)",
        second: "var(--font-color-second)",
      },
      fontFamily: {
        elisabethische: ['"Elisabethische"', "serif"], // Add your font and a fallback
      },
    },
  },
  plugins: [],
};
