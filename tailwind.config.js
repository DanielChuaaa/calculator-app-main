/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ffp: "League Spartan, sans-serif",
      },
      colors: {
        // Theme 1
        lightBlue: "#a2b2e0",
        Verydarkdesaturatedblue1: "hsl(222, 26%, 31%)",
        Verydarkdesaturatedblue2: "hsl(223, 31%, 20%)",
        Verydarkdesaturatedblue3: "hsl(224, 36%, 15%)",
        Desaturateddarkblue1: "hsl(225, 21%, 49%)",
        Desaturateddarkblue2: "hsl(224, 28%, 35%)",
        Red: " hsl(6, 63%, 50%)",
        lightRed: "#fa6c5c",
        Darkred: "hsl(6, 70%, 34%)",
        Lightgrayishorange: "hsl(30, 25%, 89%)",
        Grayishorange: "hsl(28, 16%, 65%)",
        Verydarkgrayishblue: "hsl(221, 14%, 31%)",
        //
        // Theme 2
        Lightgray: "hsl(0, 0%, 90%)",
        Grayishred: " hsl(0, 5%, 81%)",
        Verylightgray: "hsl(0, 0%, 93%)",
        Darkmoderatecyan: "hsl(185, 42%, 37%)",
        lightCyan: "#62b5bd",
        Verydarkcyan: "hsl(185, 58%, 25%)",
        Orange: "hsl(25, 98%, 40%)",
        lightOrange: "#ff8b38",
        Darkorange: "hsl(25, 99%, 27%)",
        Lightgrayishyellow: "hsl(45, 7%, 89%)",
        Darkgrayishorange: "hsl(35, 11%, 61%)",
        Verydarkgrayishyellow: "hsl(60, 10%, 19%)",
        //
        // Theme 3
        Verydarkviolet1: "hsl(268, 75%, 9%)",
        Verydarkviolet2: "hsl(268, 71%, 12%)",
        Darkviolet: "hsl(281, 89%, 26%)",
        lightViolet: "#6933ab",
        lightVividMagenta: " #8631b0",
        Vividmagenta: "hsl(285, 91%, 52%)",
        Purecyan: "hsl(176, 100%, 44%)",
        Softcyan: "hsl(177, 92%, 70%)",
        Verydarkviolet: "hsl(268, 47%, 21%)",
        Darkmagenta: "hsl(290, 70%, 36%)",
        Lightyellow: "hsl(52, 100%, 62%)",
        Verydarkblue: "hsl(198, 20%, 13%)",
      },
      fontSize: {
        32: "32px",
        0.75: "0.75rem",
      },
      padding: {
        0.4: "0.4rem",
      },
      boxShadow: {
        shadowButPrimary1: "inset 0px -4px 0px hsl(28, 16%, 65%)",
        shadowButPrimary2: "inset 0px -4px 0px hsl(35, 11%, 61%)",
        shadowButPrimary3: "inset 0px -4px 0px  hsl(290, 70%, 36%)",
        shadowButSecondary1: "inset 0px -4px 0px hsl(224, 28%, 35%)",
        shadowButSecondary2: "inset 0px -4px 0px  hsl(185, 58%, 25%)",
        shadowButSecondary3: "inset 0px -4px 0px hsl(285, 91%, 52%)",
        shadowButThird1: "inset 0px -4px 0px hsl(6, 70%, 34%)",
        shadowButThird2: "inset 0px -4px 0px hsl(25, 99%, 27%)",
        shadowButThird3: "inset 0px -4px 0px hsl(177, 92%, 70%)",
      },
      screens: {
        460: "460px",
        360: "360px",
        330: "330px",
      },
    },
  },
  plugins: [],
};
