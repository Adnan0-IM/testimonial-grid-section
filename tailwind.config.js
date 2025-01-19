/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
      tablet: "900px"
    },
    fontSize: {
      h1: "16px",
      body: "13px"
    },

    fontFamily: {
      "barlow semi condensed": "Barlow Semi Condensed",
    },

    fontWeight: {
      neutral: "500",
      bold: "700",
    },

    colors: {
      primary: {
        White: "hsl(0, 0%, 100%)",
        violet: "hsl(263, 55%, 52%)",
        grayishBlue: "hsl(217, 19%, 35%)",
        blackishBlue: "hsl(219, 29%, 14%)",
      },
      neutral: {
        "LightGray": "hsl(0, 0%, 81%)",
        "LightGrayishBlue": "hsl(210, 46%, 95%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
