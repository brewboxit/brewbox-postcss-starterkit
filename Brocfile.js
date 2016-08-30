var compileCSS = require('broccoli-postcss')
var cssnext = require('postcss-cssnext')

var options =  {
  plugins: [
    {
      module: cssnext,
      options: {
          browsers: ['last 10 version']
      }
    },
  ]
}

var outputCSS = compileCSS('src', options)
module.exports = outputCSS
