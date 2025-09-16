/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src folder ke andar sab JS/React files scan karega
  ],
  theme: {
    extend: {
      colors: {
        ankit: "#e5e7eb",       // border-ankit
        ring: "rgba(0, 0, 0, 0.5)", // outline-ring/50
        background: "#ffffff",  // bg-background
        foreground: "#000000",  // text-foreground
      },
    },
  },
  plugins: [],
}
