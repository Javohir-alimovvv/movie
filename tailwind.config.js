import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        "laylo": ["", "sans-serif"],
        "shaxzoda": ["", "sans-serif"]
      },
      extend: {
        backgroundImage: {
          'main': "url('assets')" 
        }
      },
      colors: {
        ...colors,
        darc: "#000000",
        main: "#C61F1F",
        secondary: "#A1A1A1",
        text: "#FFFFFF",
        bgtwo: "#1D1D1D80",
        bgtheree: "#111111",
        lite: "#ddd9"
      },
      container:{
        center: true,
        screens:{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1212px',
          '2xl': "1340"

        }
      }
    },
    darkMode: "class",
    plugins: [],
  }


