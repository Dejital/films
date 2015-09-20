/**
 * Created by Serge on 9/20/15.
 */

require('angular');
var MainController = require('./controllers/MainController');

var app = angular.module('app', []);
app.controller('MainController', ['$scope', MainController]);
