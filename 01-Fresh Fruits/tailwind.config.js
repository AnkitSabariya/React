/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averia: ['"Averia Serif Libre"', "cursive"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        mysh: "0 10px 15px rgba(0,0,0,0.3)",
        "custom-card": "0px 8px 24px rgba(149, 157, 165, 0.4)",
      },
      animation: {
        slowspin: "spin 10s linear infinite", // 10 seconds per rotation
      },
    },
  },
  plugins: [],
};
