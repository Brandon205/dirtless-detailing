/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fab638",
        accent: "#ff2600",
        contactBkg: "#1b1b1b",
        urableClr: "#2fd2a8",
        supportingText: "#bbb",
        secondaryText: "#aaa",
        secondaryTextLight: "#c0c0c0",
        link: "#3b9eff",
      },
    },
  },
  plugins: [],
};
