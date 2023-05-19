/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#6bb0f4",
        secondary: "#8ddfed",
        brand: "#f6916d",
        background: "#ffffff",
        foreground: "#4a4a4a",
        front: "#000000",
        back: "#ffffff",
      },
      content: {
        blank: "' '",
      },
      borderRadius: {
        circle: "100%",
      },
      fontFamily: {
        poppins: "poppins, sans-serif",
      },
      transitionDuration: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
