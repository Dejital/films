/**
 * Created by Serge on 11/9/15.
 */

module.exports = function(store) {
  var getFilms = function() {
    return store;
  };
  return { getFilms: getFilms };
};
