/**
 * Created by Serge on 9/20/15.
 */

require('angular');
var filmDataService = require('./services/FilmDataService');
var filmsController = require('./controllers/FilmsController');
var data = require('./data/data.json');

var app = angular.module('app', []);
app.value('data', data);
app.factory('FilmDataService', ['data', filmDataService]);
app.controller('FilmsController', ['$scope', '$http', 'FilmDataService', filmsController]);
