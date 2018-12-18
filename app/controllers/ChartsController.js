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
  var decades = [
    {name: '2010s', y: 0},
    {name: '2000s', y: 0},
    {name: '1990s', y: 0},
    {name: '1980s', y: 0},
    {name: '1970s', y: 0},
    {name: '1960s', y: 0},
    {name: '1950s', y: 0},
    {name: '1940s', y: 0},
    {name: '<1940', y: 0}
  ];
  var years = [
    {name: '2019', y: 0},
    {name: '2018', y: 0},
    {name: '2017', y: 0},
    {name: '2016', y: 0},
    {name: '2015', y: 0},
    {name: '2014', y: 0},
    {name: '2013', y: 0},
    {name: '2012', y: 0},
    {name: '2011', y: 0},
    {name: '2010', y: 0},
    {name: '2009', y: 0}
  ];
  var data = filmDataService.getFilms();
  angular.forEach(data, function(film){
    scores[film.rating - 1].y += 1;

    if (film.year) {
      if (film.year >= 2010) decades[0].y += 1;
      else if (film.year >= 2000) decades[1].y += 1;
      else if (film.year >= 1990) decades[2].y += 1;
      else if (film.year >= 1980) decades[3].y += 1;
      else if (film.year >= 1970) decades[4].y += 1;
      else if (film.year >= 1960) decades[5].y += 1;
      else if (film.year >= 1950) decades[6].y += 1;
      else if (film.year >= 1940) decades[7].y += 1;
      else decades[8].y += 1;
    }

    if (film.dateSeen) {
      var year = film.dateSeen.getFullYear();
      if (year == 2019) years[0].y += 1;
      else if (year == 2018) years[1].y += 1;
      else if (year == 2017) years[2].y += 1;
      else if (year == 2016) years[3].y += 1;
      else if (year == 2015) years[4].y += 1;
      else if (year == 2014) years[5].y += 1;
      else if (year == 2013) years[6].y += 1;
      else if (year == 2012) years[7].y += 1;
      else if (year == 2011) years[8].y += 1;
      else if (year == 2010) years[9].y += 1;
      else if (year == 2009) years[10].y += 1;
    }
  });

  Highcharts.chart('ratingsChart', {
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

  Highcharts.chart('decadesChart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Film Decades'
    },
    plotOptions: {
      pie: {
        startAngle: 90,
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'black'
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Count',
      colorByPoint: true,
      data: decades
    }]
  });

  Highcharts.chart('yearsChart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Films Watched By Year'
    },
    plotOptions: {
      pie: {
        startAngle: 90,
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'black'
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Count',
      colorByPoint: true,
      data: years
    }]
  });

};
