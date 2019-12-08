$( document ).ready(function() {
	

// Create the chart
Highcharts.chart('stance-popularity', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Fighting Stance Popularity',
    style: {
      fontWeight: 'bold'
    }
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total Percent of Fighters'
    },
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 10,
      label: {
        align: 'right',
        style: {
          fontStyle: 'italic'
        },
        text: 'Expected left-handedness',
        x: 2
      },
      zIndex: 3
    }],

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [{
    name: "Stances",
    colorByPoint: true,
    data: [{
        name: "Orthodox",
        y: 78.43
      },
      {
        name: "Southpaw",
        y: 17.67
      },
      {
        name: "Switch",
        y: 3.49
      },
      {
        name: "Open",
        y: 0.29
      },
      {
        name: "Sideways",
        y: 0.12
      }
    ]
  }]
});

Highcharts.chart('advantage-distribution', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'UFC Advantage Distribution by Corner Color'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Prediction by Corner',
    colorByPoint: true,
    data: [{
      name: 'Red',
      color: '#ff5e5e',
      y: 2141
    }, {
      name: 'Blue',
      color: '#6ba1ff',
      y: 2137
    }, {
      name: 'Even Match',
      color: '#4e5052',
      y: 866
    }]
  }]
});

Highcharts.chart('results-distribution', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'UFC Results by Corner Color'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Results by Corner',
    colorByPoint: true,
    data: [{
      name: 'Red',
      color: '#ff5e5e',
      y: 3470
    }, {
      name: 'Blue',
      color: '#6ba1ff',
      y: 1591
    }, {
      name: 'Draw',
      color: '#4e5052',
      y: 83
    }]
  }]
});

Highcharts.chart('underdog-dist', {

  chart: {
    polar: true,
    type: 'line'
  },

  title: {
    text: 'Blue Corner (Underdog) Win Percentages',
    x: -80
  },

  pane: {
    size: '80%'
  },

  xAxis: {
    categories: ['Advantage Wins', 'Disadvantage Wins', 'Equal Advantage Wins'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },

  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },

  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
  },

  legend: {
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Southpaw v. Orthodox',
    data: [16, 13.57, 5],
    pointPlacement: 'on'
  }, {
    name: 'Southpaw v. Southpaw',
    data: [14.35, 10.65, 4.17],
    pointPlacement: 'on'
  }, {
    name: 'Orthodox v. Orthodox',
    data: [13.25, 12.21, 4.79],
    pointPlacement: 'on'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom'
        },
        pane: {
          size: '70%'
        }
      }
    }]
  }

});

Highcharts.chart('champ-dist', {

  chart: {
    polar: true,
    type: 'line'
  },

  title: {
    text: 'Red Corner (Champion) Win Percentages',
    x: -80
  },

  pane: {
    size: '80%'
  },

  xAxis: {
    categories: ['Advantage Wins', 'Disadvantage Wins', 'Equal Advantage Wins'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },

  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },

  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },

  legend: {
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Southpaw v. Orthodox',
    data: [29.71, 27.98, 12.73],
    pointPlacement: 'on'
  }, {
    name: 'Southpaw v. Southpaw',
    data: [31.94, 28.24, 8.80],
    pointPlacement: 'on'
  }, {
    name: 'Orthodox v. Orthodox',
    data: [29.20, 27.67, 11.30],
    pointPlacement: 'on'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom'
        },
        pane: {
          size: '70%'
        }
      }
    }]
  }

});

Highcharts.chart('heatmap', {

  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },


  title: {
    text: 'Southpaw Wins by Advantage over Time',
    style: {
      fontWeight: 'bold'
    }
  },

  xAxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
  },

  yAxis: {
    categories: ['Southpaw Advantage', 'Orthodox Advantage', 'Equal Advantage'],
    title: null,
    reversed: true
  },

  colorAxis: {
    min: 30,
    minColor: '#FFFFFF',
    maxColor: '#ff0000'
  },

  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280
  },

  tooltip: {
    formatter: function() {
      return 'Given ' + '<b>' + this.series.yAxis.categories[this.point.y] + '<br/> ' + '<b>' +
        this.point.value + '<b>%' + '</b> wins <br><b>';
    }
  },

  series: [{
    name: 'Southpaw Wins by Advantage over Time',
    borderWidth: 1,
    data: [
      [0, 0, 70.83],
      [0, 1, 64.71],
      [0, 2, 69.23],
      [1, 0, 51.61],
      [1, 1, 48],
      [1, 2, 44.44],
      [2, 0, 71.43],
      [2, 1, 56.25],
      [2, 2, 33, 33],
      [3, 0, 57.89],
      [3, 1, 51.35],
      [3, 2, 52.94],
      [4, 0, 39.53],
      [4, 1, 47.92],
      [4, 2, 50],
      [5, 0, 56.6],
      [5, 1, 48.98],
      [5, 2, 78.57],
      [6, 0, 53.33],
      [6, 1, 50],
      [6, 2, 50],
      [7, 0, 60.38],
      [7, 1, 59.02],
      [7, 2, 61.11],
      [8, 0, 50],
      [8, 1, 56.36],
      [8, 2, 47.06],
      [9, 0, 52.63],
      [9, 1, 38.64],
      [9, 2, 40.91],
      [10, 0, 50.82],
      [10, 1, 43.1],
      [10, 2, 44.44]
    ],
    dataLabels: {
      enabled: true,
      color: '#000000'
    }
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        yAxis: {
          labels: {
            formatter: function() {
              return this.value.charAt(0);
            }
          }
        }
      }
    }]
  }

});

});
