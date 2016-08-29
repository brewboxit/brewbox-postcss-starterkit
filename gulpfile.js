var gulp = require('gulp')
    , postcss = require('gulp-postcss');

// PostCSS plugins
var cssnext = require('postcss-cssnext');

gulp.task('css', function () {

  var processors = [
    cssnext
  ];

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
