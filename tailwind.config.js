/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    backgroundSize: {
      "80%": "80%",
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-amis-pro)"],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20)  alternate, blink .7s infinite"
      }
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "base-yellow": "#FAE600",
      "base-black": "#141414",
      white: "#FFFFFF",
      "secondary-dark-gray": "#373232",
      "light-gray": "#636363",
      "dark-blue": "#022D51",
      "base-gray": "#8F8F8F",
      "dark-gray": "#302C2C",
      "success-color": "#229718",
    },
  },
};
