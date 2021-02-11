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
    {name: '<1940', y: 0},
    {name: '1940s', y: 0},
    {name: '1950s', y: 0},
    {name: '1960s', y: 0},
    {name: '1970s', y: 0},
    {name: '1980s', y: 0},
    {name: '1990s', y: 0},
    {name: '2000s', y: 0},
    {name: '2010s', y: 0},
    {name: '2020s', y: 0}
  ];
  var years = [
    {name: '2009', y: 0},
    {name: '2010', y: 0},
    {name: '2011', y: 0},
    {name: '2012', y: 0},
    {name: '2013', y: 0},
    {name: '2014', y: 0},
    {name: '2015', y: 0},
    {name: '2016', y: 0},
    {name: '2017', y: 0},
    {name: '2018', y: 0},
    {name: '2019', y: 0},
    {name: '2020', y: 0},
    {name: '2021', y: 0}
  ];
  var months = [
    {name: 'Jan', y: 0},
    {name: 'Feb', y: 0},
    {name: 'Mar', y: 0},
    {name: 'Apr', y: 0},
    {name: 'May', y: 0},
    {name: 'Jun', y: 0},
    {name: 'Jul', y: 0},
    {name: 'Aug', y: 0},
    {name: 'Sep', y: 0},
    {name: 'Oct', y: 0},
    {name: 'Nov', y: 0},
    {name: 'Dec', y: 0}
  ];
  var days = [
    {name: 'Sunday', y: 0},
    {name: 'Monday', y: 0},
    {name: 'Tuesday', y: 0},
    {name: 'Wednesday', y: 0},
    {name: 'Thursday', y: 0},
    {name: 'Friday', y: 0},
    {name: 'Saturday', y: 0}
  ];
  var repeats = [
    {name: 'First', y: 0},
    {name: 'Repeat', y: 0}
  ];
  var data = filmDataService.getFilms();
  angular.forEach(data, function(film){
    scores[film.rating - 1].y += 1;

    if (!film.repeat) repeats[0].y += 1;
    else repeats[1].y += 1;

    if (film.year) {
      if (film.year >= 2020) decades[9].y += 1;
      else if (film.year >= 2010) decades[8].y += 1;
      else if (film.year >= 2000) decades[7].y += 1;
      else if (film.year >= 1990) decades[6].y += 1;
      else if (film.year >= 1980) decades[5].y += 1;
      else if (film.year >= 1970) decades[4].y += 1;
      else if (film.year >= 1960) decades[3].y += 1;
      else if (film.year >= 1950) decades[2].y += 1;
      else if (film.year >= 1940) decades[1].y += 1;
      else decades[0].y += 1;
    }

    if (film.dateSeen) {
      var year = film.dateSeen.getFullYear();
      if (year == 2021) years[12].y += 1;
      else if (year == 2020) years[11].y += 1;
      else if (year == 2019) years[10].y += 1;
      else if (year == 2018) years[9].y += 1;
      else if (year == 2017) years[8].y += 1;
      else if (year == 2016) years[7].y += 1;
      else if (year == 2015) years[6].y += 1;
      else if (year == 2014) years[5].y += 1;
      else if (year == 2013) years[4].y += 1;
      else if (year == 2012) years[3].y += 1;
      else if (year == 2011) years[2].y += 1;
      else if (year == 2010) years[1].y += 1;
      else if (year == 2009) years[0].y += 1;

      var month = film.dateSeen.getMonth();
      if (month == 1) months[0].y += 1;
      else if (month == 2) months[1].y += 1;
      else if (month == 3) months[2].y += 1;
      else if (month == 4) months[3].y += 1;
      else if (month == 5) months[4].y += 1;
      else if (month == 6) months[5].y += 1;
      else if (month == 7) months[6].y += 1;
      else if (month == 8) months[7].y += 1;
      else if (month == 9) months[8].y += 1;
      else if (month == 10) months[9].y += 1;
      else if (month == 11) months[10].y += 1;
      else months[11].y += 1;

      var day = film.dateSeen.getDay();
      if (day == 0) days[0].y += 1;
      else if (day == 1) days[1].y += 1;
      else if (day == 2) days[2].y += 1;
      else if (day == 3) days[3].y += 1;
      else if (day == 4) days[4].y += 1;
      else if (day == 5) days[5].y += 1;
      else days[6].y += 1;
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

  Highcharts.chart('repeatsChart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'First vs Repeat Viewings',
      y: 80
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
      data: repeats
    }]
  });

  Highcharts.chart('decadesChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Films By Decade'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
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
      type: 'column'
    },
    title: {
      text: 'Films Watched Each Year'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
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

  Highcharts.chart('monthsChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Films Watched By Month'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Count',
      colorByPoint: true,
      data: months
    }]
  });

  Highcharts.chart('daysChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Films Watched By Day of the Week'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Count',
      colorByPoint: true,
      data: days
    }]
  });

};
