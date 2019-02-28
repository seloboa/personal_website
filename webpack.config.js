module.exports = {
  mode:'production',
  entry: './index.js',
  output: {
    path: __dirname+'./public',
    filename: 'bundle.js'
  },
}
