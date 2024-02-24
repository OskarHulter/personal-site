/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('@pandacss/dev/postcss')(),
  ]
}

// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: [
//     require('autoprefixer'),
//     require('cssnano')
//   ]
// }

// module.exports = config
