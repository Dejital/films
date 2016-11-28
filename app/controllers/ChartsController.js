/**
 * Created by Serge on 11/27/16.
 */

module.exports = function($scope, filmDataService) {
  var scores = [
    {name: '1', y: 0, color: '#FFD5D8'},
    {name: '2', y: 0, color: '#FFF6CD'},
    {name: '3', y: 0, color: '#D9EACA'},
    {name: '4', y: 0, color: '#BCDDA1'},
    {name: '5', y: 0, color: '#FDC131'},
  ];
  var data = filmDataService.getFilms();
  angular.forEach(data, function(film){
    scores[film.rating - 1].y += 1;
  });

  Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Ratings<br>Spread',
      align: 'center',
      verticalAlign: 'middle',
      y: 50
    },
    plotOptions: {
      pie: {
        size: '100%',
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'black'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%']
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Count',
      type: 'pie',
      innerSize: '50%',
      data: scores
    }]
  });

};
