// gulpfile.js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('css', function () {
  return gulp.src('./assets/css/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./dist'));
});