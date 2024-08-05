// 차트 초기화 함수
function initializePieChart() {
  var pieChart = echarts.init(document.getElementById('pie-chart'));

  var option = {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: 40,
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [] // 초기 데이터는 비어 있음
          }
      ]
  };

  pieChart.setOption(option);

  return pieChart;
}

// 차트 데이터 업데이트
function updatePieChart(chart, data) {
  chart.setOption({
      series: [{
          data: data
      }]
  });
}
