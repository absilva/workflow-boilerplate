'user strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

// Test copy file
gulp.task('copy-files', function(){
	return gulp.src('source/index.html')
		.pipe(gulp.dest('dist/'));
});

// Run sass to compile
gulp.task('sass', function () {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Sass watch
gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});

// Gulp watch
gulp.task('gulp:watch', function(){
	return gulp.watch()
});

// minify HTML
gulp.task('minify-html', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'minify-html']);