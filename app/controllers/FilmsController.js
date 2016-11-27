/**
 * Created by Serge on 9/22/15.
 */

module.exports = function($scope, $http, filmDataService) {
  $scope.films = [];
  $scope.reverseSort = true;
  $scope.predicate = null;
  $scope.order = function (predicate) {
    $scope.reverseSort = ($scope.predicate === predicate) ? !$scope.reverseSort : false;
    $scope.predicate = predicate;
  };

  var data = filmDataService.getFilms();
  angular.forEach(data, function(film){
      film.dateSeen = new Date(film.dateSeen);
      $scope.films.push(film);
  });
};
