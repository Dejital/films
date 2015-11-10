/**
 * Created by Serge on 9/20/15.
 */

require('angular');
var filmDataService = require('./services/FilmDataService');
var filmsController = require('./controllers/FilmsController');

var app = angular.module('app', []);
app.factory('FilmDataService', ['$http', filmDataService]);
app.controller('FilmsController', ['$scope', '$http', 'FilmDataService', filmsController]);
