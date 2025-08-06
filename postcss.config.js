module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@thedutchcoder/postcss-rem-to-px', { baseValue: 18 }),
    require('tailwindcss')
  ]
}
