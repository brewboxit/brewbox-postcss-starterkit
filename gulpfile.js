var gulp = require('gulp')
    , postcss = require('gulp-postcss');

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

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
