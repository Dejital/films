/**
 * Created by Serge on 11/9/15.
 */

module.exports = function(store) {
  var getFilms = function() {
    const cleaned = [];
    angular.forEach(store, function(row) {
      const film = {
        rating: row["RATING"],
        title: row["TITLE"],
        year: row["YEAR"],
        director: row["DIRECTOR"],
        dateSeen: row["DATE SEEN"],
        repeat: row["REPEAT"] === "TRUE",
      };
      cleaned.push(film);
    });
    return cleaned;
  };
  return { getFilms: getFilms };
};
