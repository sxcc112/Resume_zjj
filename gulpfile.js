var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var htmlmini = require('gulp-minify-html');


gulp.task('compass', function () {
    gulp.src(['js/*.js','!js/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'));
});

gulp.task('cssmini', function () {
    gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(minify())
        .pipe(gulp.dest('buildcss/'));
});

gulp.task('htmlmini', function () {
    gulp.src('*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('minihtml'));
})