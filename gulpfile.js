var gulp = require('gulp');
// gulp.task('myTask', function() {
//   console.log('hello gulp');
//
// });
// adding the file packages
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// a function to call browserify
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
