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
      },
    },
  },
  plugins: [require('daisyui')],
}
