/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1496px',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      'border-radius': '30px',
    },
    extend: {
      keyframes: {
        autoScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-100vw 0' },
        },
      },
      animation: {
        autoScroll: 'autoScroll 60s linear infinite',
      },
      colors: {
        'body-bg': '#0f0f0f',
        'main-color': '#ff0000',
        'txt-color': '#fff',
      },
      boxShadow: {
        'box-shadow': '0 7px 29px 0 rgba(100, 100, 111, 0.2)',
        button: '0 0 7px 8px #ff00004d',
        'button-hover': '0 0 7px 15px #ff00004d',
      },
      height: {
        'header-height': '8rem',
        'header-shrink-height': '5rem',
      },
    },
  },
  plugins: [],
}
