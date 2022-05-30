module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#677acb',
        lightGrey: '#f2f5ff',
        systemBlack: '#29325A',
        systemGray: 'rgba(41,50,90,0.4)',
      },
    },
  },
  plugins: [require('daisyui')],
}
