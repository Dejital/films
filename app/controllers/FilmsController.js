/**
 * Created by Serge on 9/22/15.
 */

module.exports = function($scope, $http) {
    $http.get('data/data.json').success(function (data){
        $scope.films = data;
        $scope.reverseSort = false;
        $scope.predicate = null;
        
        $scope.order = function (predicate) {
            $scope.reverseSort = ($scope.predicate === predicate) ? !$scope.reverseSort : false;
            $scope.predicate = predicate;
        }
    });
};
