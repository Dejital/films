/**
 * Created by Serge on 9/20/15.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: process.env.PORT || 5000
    })
});

gulp.task('browserify', function() {
    return browserify('./app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('sass', function() {
    return sass('sass/screen.scss')
        .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('sass/screen.scss', ['sass']);
});

gulp.task('default', ['watch', 'connect']);

