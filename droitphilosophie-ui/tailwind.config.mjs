/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans Variable", "ui-sans-serif"],
    },
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        accent: "#2b4359",
        "accent-light": "#a5b5c5",
        "accent-dark": "#53616e",
        secondary: "#d5b985",
        "secondary-light": "#f7e9d0",
        "secondary-dark":"#a58e6a",
        background: "#d1d9e1",
        "background-alt": "#e0e3eb",
        "background-alt-dark": "#252d3a",
        "background-light": "#f1f5f9",
        "background-dark": "#1a202c",
        color: "#101010",
        "color-light": "#e8e8e8",
        "accent-gradient-dark":
          "linear-gradient( 45deg, rgb(var(--accent-dark)), rgb(var(--accent-light)) 60%, white 90%); ",
        "accent-gradient-light":
          "linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%); ",
      },
    },
  },
  plugins: [require("daisyui")],
};
