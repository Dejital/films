/**
 * Created by Serge on 9/20/15.
 */

require('angular');
var FilmsController = require('./controllers/FilmsController');

var app = angular.module('app', []);
app.controller('FilmsController', ['$scope', FilmsController]);
