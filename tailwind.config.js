/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  container: {
    center: true,
  },
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1100px",
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        com: ["var(--font-com)"],
      },
      colors: {
        bg_light: "hsl(0,4%,5%)",
        hero_bg: "hsl(45,20%,4%)",
        yellow_text: "hsl(47,55%,70%)",
        text: "hsl(0,0%,67%)",
        divider: "hsl(0,0%,98%)",
        selected: "hsl(222,32%,14%)",
        category: "hsl(216,19%,28%)",
      },
    },
  },
  plugins: [],
}
