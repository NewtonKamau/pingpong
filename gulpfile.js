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
// introducing concating
gulp.task('concatInterface', function() {
  return gulp.src(['./js/interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

var concat = require('gulp-concat');

gulp.task('concatInterface', function() {
  return gulp.src([ './js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

var uglify = require('gulp-uglify');

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});
