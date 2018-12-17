/**
 * Created by Serge on 9/20/15.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('connect', function () {
    connect.server({
        root: 'docs',
        port: process.env.PORT || 5000
    })
});

gulp.task('browserify', function() {
    return browserify('./app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./docs/js/'))
});

gulp.task('sass', function() {
    return sass('sass/screen.scss')
        .pipe(gulp.dest('./docs/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('sass/screen.scss', ['sass']);
});

gulp.task('default', ['watch', 'connect']);

