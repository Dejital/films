/**
 * Created by Serge on 9/20/15.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
});
