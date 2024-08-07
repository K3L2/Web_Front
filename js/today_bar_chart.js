let errorCount = [20, 15, 5, 10];


// pattern Bar Chart

var patternBarChartDom = document.getElementById('patternBarChart');
var patternBarChart = echarts.init(patternBarChartDom);

patternBarChartOption = {
    xAxis: {
      type: 'category',
      data: ['패턴 불량 수']
    },
    yAxis: [
        {
          type: 'value',
          name: 'TotalDefects', 
          min: 0,
          max: 50, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
          show: false
        }
    ],
    series: [
      {
        data: [errorCount[0]],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.6)'
        },
        barWidth: '20%'
      }
    ]
};

patternBarChart.setOption(patternBarChartOption);

// ink Bar Chart

var inkBarChartDom = document.getElementById('inkBarChart');
var inkBarChart = echarts.init(inkBarChartDom);

inkBarChartOption = {
    xAxis: {
      type: 'category',
      data: ['잉크 불량 수']
    },
    yAxis: [
        {
          type: 'value',
          name: 'TotalDefects', 
          min: 0,
          max: 50, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
          show: false
        }
    ],
    series: [
      {
        data: [errorCount[1]],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.6)'
        },
        barWidth: '20%'
      }
    ]
};

inkBarChart.setOption(inkBarChartOption);


// au Bar Chart

var auBarChartDom = document.getElementById('auBarChart');
var auBarChart = echarts.init(auBarChartDom);

auBarChartOption = {
    xAxis: {
      type: 'category',
      data: ['금도금 불량 수']
    },
    yAxis: [
        {
          type: 'value',
          name: 'TotalDefects', 
          min: 0,
          max: 50, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
          show: false
        }
    ],
    series: [
      {
        data: [errorCount[2]],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.6)'
        },
        barWidth: '20%'
      }
    ]
};

auBarChart.setOption(auBarChartOption);


// Scratch Bar Chart

var scratchBarChartDom = document.getElementById('scratchBarChart');
var scratchBarChart = echarts.init(scratchBarChartDom);

scratchBarChartOption = {
    xAxis: {
      type: 'category',
      data: ['스크래치 불량 수']
    },
    yAxis: [
        {
          type: 'value',
          name: 'TotalDefects', 
          min: 0,
          max: 50, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
          show: false
        }
    ],
    series: [
      {
        data: [errorCount[3]],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.6)'
        },
        barWidth: '20%'
      }
    ]
};

scratchBarChart.setOption(scratchBarChartOption);
