/**
 * Created by Serge on 11/9/15.
 */

module.exports = function($http) {
  var getFilms = function() {
    return $http.get('data/data.json').then(function(response) {
      return response.data;
    });
  };
  return { getFilms: getFilms };
};
