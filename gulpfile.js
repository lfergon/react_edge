var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('')
    .pipe(watch('app.js'))
    .pipe(gulp.dest('dist'));
});

