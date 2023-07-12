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
        'dark-black': '#0D0D0D',
        'input-color': 'rgba(31, 31, 31, 1)',
        'input-text-color': 'rgba(162, 162, 162, 1)',
        'light-white': 'rgba(243, 243, 243, 1)',
        'light-red': 'rgba(252, 54, 76, 1)',
        'light-gray': 'rgba(142, 139, 143, 1)',
        'light-black': 'rgba(13, 13, 13, 1)',
        'transparent-black': 'rgba(13, 13, 13, 0.5)',
      },
      boxShadow: {
        'input-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        manrope: ['Manrope'],
      },
      backgroundImage: {
        'header-gradient':
          "linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)",
        'banner-gradient':
          'linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)'
      },

    },
  },
  plugins: [],
}
