/**
 * Created by Serge on 9/22/15.
 */

module.exports = function($scope, $http) {
    $scope.reverseSort = true;
    $scope.predicate = null;
    $scope.order = function (predicate) {
        $scope.reverseSort = ($scope.predicate === predicate) ? !$scope.reverseSort : false;
        $scope.predicate = predicate;
    }

    $http.get('data/data.json').success(function (data){
        $scope.films = data;
        angular.forEach($scope.films, function(film) {
            film.dateSeen = new Date(film.dateSeen);
        });
    });
};
