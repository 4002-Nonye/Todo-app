/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBlue: " hsl(220, 98%, 61%)",
        check: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        lightTheme: {
          veryLightGray: "hsl(0, 0%, 98%)",
          veryLightGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        },
        darkTheme: {
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: " hsl(235, 24%, 19%)",
          lightGrayishBlueDark: "hsl(234, 39%, 85%)",
          lightGrayishBlueHov: " hsl(236, 33%, 92%)",
          darkGrayishBluedk: "hsl(234, 11%, 52%)",
          veryDarkGrayishBluedk: " hsl(233, 14%, 35%)",
          veryDarkGrayishBluedk2: " hsl(237, 14%, 26%)",
        },
      },
    },
  },
  plugins: [],
};
