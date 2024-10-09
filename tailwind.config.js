/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
        Inter: ["Inter", "sans-serif"], // Headings font
        HagridText: ["Hagrid Text", "sans-serif"], // Button font
      },
      colors: {
        heading: "#042D3D", // Headings color
        textColor: "#000000", // Text color
        buttonColor: "#FF811B", // Button color
        // Adding button color for consistency
      },
      backgroundColor: {
        "dark-color": "#272643",
        "orange-color": "#FF811B",
      },
      backgroundImage: {
        bgImg: "url('./src/img/bg.png')",
      },
    },
  },
  plugins: [],
};
