var gulp = require('gulp');
var runSequence = require('run-sequence');
var zip = require('gulp-zip');

gulp.task('main', function() {
  return gulp.src(["index.*", "config.js", "LICENSE", "README.md", "favicon.ico"])
     .pipe(gulp.dest('release/build'));
});

gulp.task('img', function() {
  return gulp.src("img/**/*")
     .pipe(gulp.dest('release/build/img'));
});

gulp.task('styles', function() {
  return gulp.src("styles/**/*")
     .pipe(gulp.dest('release/build/styles'));
});

gulp.task('bundles', function() {
  return gulp.src("dist/*.js")
     .pipe(gulp.dest('release/build/dist'));
});

gulp.task('jspm_packages', function() {
  gulp.src("jspm_packages/**/*")
     .pipe(gulp.dest('release/build/jspm_packages'));
});

gulp.task('package-release', function() {
  return gulp.src('release/build/**/*')
            .pipe(zip('bundox-client.zip'))
            .pipe(gulp.dest('release'));
});

gulp.task('create-release', function(callback) {
  return runSequence(
    'build',
    'bundle',
    ['main', 'bundles', 'jspm_packages', 'img', 'styles'],
    'package-release',
    callback
  );
});
