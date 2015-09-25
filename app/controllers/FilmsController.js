/**
 * Created by Serge on 9/22/15.
 */

module.exports = function($scope, $http) {
    $http.get('data/data.json').success(function (data){
        $scope.films = data;
    });
};
