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
          'food':"url('/Rectangle 2.png')",
          'menu':"url('/bg.png')",
          'forgot':"url('/forgot.png')",
          'reset':"url('./reset.png')",
          'home':"url('/home.png')",
          'front':"url('/front.png')",
          'drink':"url('/drink.png')"
      },
      colors:{
        'ingrey':'#424242',
        'inyellow':'#F5C000',
        'second':'rgba(255, 255, 255, 0.3)',
        'first':'rgba(245, 192, 0, 0.4)',
        'boxcol':'#0E0E0E'
      },
      fontFamily:{
        'bebasneue':['Bebas Neue, sans-serif'],
        poppins:["var(--poppins)"],
       
      },
      
      screens:{
        'avg':'1098px',
        'med':'824px'
      }
    },
  },
  plugins: [],
};
export default config;
