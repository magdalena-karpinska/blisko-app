import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#84A9CD",
          secondary: "#B8E0E3",
          "base-100": "#FFF9E6",
          white: "#FFF",
          darkOrange: "#FC9F66",
          orange: "#FAC357",
          lightOrange: "#FAE39C",
          lightBlue: "#B8E0E3",
          blue: "#97C5D8",
          gray: "#D1D1D6",
        },
      },
    ],
  },
};
export default config;
