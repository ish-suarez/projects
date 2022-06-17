module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

