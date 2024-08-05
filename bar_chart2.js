var barChartDom = document.getElementById('barChart');
var barChart = echarts.init(barChartDom);

barChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Pattern Error',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        // data: [40, 13, 10, 13, 9, 21, 11],
        data: [40],
        barWidth: '45%',
        itemStyle: {
            barBorderRadius: 5,
            // color: '#91cc75'
        }
      },
      {
        name: 'Ink Error',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        // data: [22, 18, 19, 23, 29, 10, 9],
        data: [22],
        itemStyle: {
            // barBorderRadius: 3,
        }
      },
      {
        name: 'Scratch Error',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        // data: [6, 11, 24, 17, 10, 15, 17],
        data: [6],
        itemStyle: {
            // barBorderRadius: 3,
        }
      },
      {
        name: 'Au Error',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        // data: [15, 22, 21, 14, 10, 12, 10],
        data: [15],
        itemStyle: {
            barBorderRadius: 5,
        }
      }
    ]
};

barChart.setOption(barChartOption);