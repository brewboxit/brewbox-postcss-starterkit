var gulp = require('gulp');
var postcss = require('gulp-postcss');
var watch = require('gulp-watch')

// PostCSS plugins
var size = require('postcss-size');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

gulp.task('css', function () {

  var processors = [
    size(),
    cssnext({browsers: ['last 10 versions']}),
    cssnano({core: false, autoprefixer: false, safe: true})
  ];

  return watch('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
