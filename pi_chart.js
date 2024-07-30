var chartDom = document.getElementById('piChart');
var myChart = echarts.init(chartDom);
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
            name: 'Defect Types',
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
            data: [
                { value: 500, name: 'Pattern Error' },
                { value: 250, name: 'Ink Error' },
                { value: 150, name: 'Scratch Error' },
                { value: 100, name: 'Au Error' }
            ]
        }
    ]
};
myChart.setOption(option);