/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitet: "#F8FAFC",
        redt: "#DD524C",
        bluet: "#3662E3",
        greent: "#32D657",
        grayt: "#00000033",
        lightgrayt: "#E3E8EF",
        darkgrayt: "#97A3B6",
        roset: "#ffb1b1",
        lightgreent: "#A0ECB1",
        lightoranget: "#F5D565",
        oranget: "#E9A23B",
        lightroset: "#fce8a0",
        addt: "#b1b6ff",
        darkaddt: "#535ef8",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-redt",
    "bg-bluet",
    "bg-greent",
    "bg-grayt",
    "bg-lightgrayt",
    "bg-darkgrayt",
    "bg-roset",
    "bg-lightgreent",
    "bg-lightoranget",
    "bg-oranget",
    "bg-lightroset",
    "bg-addt",
    "bg-darkaddt",
  ],
};
