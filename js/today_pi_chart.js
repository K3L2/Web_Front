var piChartDom = document.getElementById('statePiChart');
var piChart = echarts.init(piChartDom);
var piChartOption = {
    title: {
        // text: '이번 주차 불량 비율'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '불량 종류',
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
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 500, name: '패턴 불량' },
                { value: 250, name: '잉크 불량' },
                { value: 150, name: '금도금 불량' },
                { value: 100, name: '스크래치' }
            ]
        }
    ]
};
piChart.setOption(piChartOption);