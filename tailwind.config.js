module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  screens: {
    '3xl': {'max': '1920px'},
    // => @media (max-width: 1535px) { ... }

    '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
