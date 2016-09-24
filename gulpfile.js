var gulp = require('gulp')
var postcss = require('gulp-postcss')

// PostCSS plugins
var size = require('postcss-size')
var cssnext = require('postcss-cssnext')
var cssnano = require('cssnano')
var sourcePath = './src/*.css'

// PostCSS plugins options
var processors = [
  size(),
  cssnext({ browsers: ['last 10 versions'] }),
  cssnano({ core: false, autoprefixer: false, safe: true })
]

function build() {
  return gulp.src(sourcePath)
  .pipe(postcss(processors))
  .pipe(gulp.dest('./dist'))
}

function watch() {
  return gulp.watch(sourcePath, ['css'])
}

gulp.task('css', build)

gulp.task('css:watch', watch)
