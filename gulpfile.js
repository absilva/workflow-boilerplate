'user strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

// Copy HTML files
gulp.task('copy-html', function(){
	return gulp.src('source/**/*.html')
		.pipe(gulp.dest('dist/'));
});

// Run sass to compile
gulp.task('sass', function () {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Sass watch
gulp.task('listen', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
  gulp.watch('./source/**/*.html', ['minify-html']);
});

// minify HTML
gulp.task('minify-html', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clear', function(){
  del('dist/');
})

gulp.task('default', ['sass', 'minify-html']);