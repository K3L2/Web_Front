const GAUGE_WIDTH = 15;
const TICK_DISTANCE = -10;
const LABEL_DISTANCE = 25;

let errorGaugeData = [90, 83, 60, 95]

let stateGaugeData = 95

// Pattern Gauge Chart

var patternChartDom = document.getElementById('patternGaugeChart');
var patternGaugeChart = echarts.init(patternChartDom);
patternOption = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: GAUGE_WIDTH,
            color: [
              [0.8, '#eb3d34'],
              [0.9, '#fca903'],
              [1, '#1fde29']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: TICK_DISTANCE,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: LABEL_DISTANCE,
          fontSize: 15
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}점',
          color: 'inherit',
          fontSize: 14
        },
        data: [
          {
            value: errorGaugeData[0]
          }
        ]
      }
    ]
  };
patternGaugeChart.setOption(patternOption);


// Ink Gauge Chart

var inkChartDom = document.getElementById('inkGaugeChart');
var inkGaugeChart = echarts.init(inkChartDom);
inkOption = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: GAUGE_WIDTH,
            color: [
              [0.8, '#eb3d34'],
              [0.9, '#fca903'],
              [1, '#1fde29']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: TICK_DISTANCE,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: LABEL_DISTANCE,
          fontSize: 15
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}점',
          color: 'inherit',
          fontSize: 14
        },
        data: [
          {
            value: errorGaugeData[1]
          }
        ]
      }
    ]
};

inkGaugeChart.setOption(inkOption);



// Au Gauge Chart

var auChartDom = document.getElementById('auGaugeChart');
var auGaugeChart = echarts.init(auChartDom);
auOption = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: GAUGE_WIDTH,
            color: [
              [0.8, '#eb3d34'],
              [0.9, '#fca903'],
              [1, '#1fde29']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: TICK_DISTANCE,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: LABEL_DISTANCE,
          fontSize: 15
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}점',
          color: 'inherit',
          fontSize: 14
        },
        data: [
          {
            value: errorGaugeData[2]
          }
        ]
      }
    ]
};

auGaugeChart.setOption(auOption);



// Scratch Gauge Chart

var scratchChartDom = document.getElementById('scratchGaugeChart');
var scratchGaugeChart = echarts.init(scratchChartDom);
scratchOption = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: GAUGE_WIDTH,
            color: [
              [0.8, '#eb3d34'],
              [0.9, '#fca903'],
              [1, '#1fde29']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: TICK_DISTANCE,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: LABEL_DISTANCE,
          fontSize: 15
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}점',
          color: 'inherit',
          fontSize: 14
        },
        data: [
          {
            value: errorGaugeData[3]
          }
        ]
      }
    ]
};
scratchGaugeChart.setOption(scratchOption);

// Pattern Gauge Chart

var stateChartDom = document.getElementById('stateGaugeChart');
var stateGaugeChart = echarts.init(stateChartDom);
stateOption = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: GAUGE_WIDTH,
            color: [
              [0.8, '#eb3d34'],
              [0.9, '#fca903'],
              [1, '#1fde29']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: TICK_DISTANCE,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: LABEL_DISTANCE,
          fontSize: 15
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}점',
          color: 'inherit',
          fontSize: 14
        },
        data: [
          {
            value: stateGaugeData
          }
        ]
      }
    ]
  };
stateGaugeChart.setOption(stateOption);




setInterval(function () {
    patternGaugeChart.setOption({
      series: [
        {
          data: [
            {
              value: +(Math.random() * 100).toFixed()
            }
          ]
        }
      ]
    });
    inkGaugeChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed()
              }
            ]
          }
        ]
      });
      auGaugeChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed()
              }
            ]
          }
        ]
      });
      scratchGaugeChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed()
              }
            ]
          }
        ]
      });
      stateGaugeChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed()
              }
            ]
          }
        ]
      });
}, 2000);