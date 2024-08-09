$(document).ready(function() {
    
    getTodayDefects();
    getTodayProductDefects();

});

// getTodayProductDefects
function getTodayProductDefects() {
    const defect_url = 'https://api.npoint.io/56bd09cbc0c208250a77'

    $.ajax({
        url: defect_url, // 요청을 보낼 URI
        method: 'GET',
        dataType: 'json', // 반환받는 데이터의 타입을 JSON으로 지정
        success: function(data) {
            console.log('금일 불량 제품 수');
            console.log(data);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 요청이 실패했을 때 실행할 코드
            console.error('AJAX 요청 실패:', textStatus, errorThrown);
        }
    });

}

// getTodayDefects
function getTodayDefects() {
    const todayURL = 'https://api.npoint.io/14cef19185a6253c3828'

    // 오늘 전체 불량 개수 (pie Chart를 위함)
    $.ajax({
        url: todayURL, // 요청을 보낼 URI
        method: 'GET',
        dataType: 'json', // 반환받는 데이터의 타입을 JSON으로 지정
        success: function(data) {
            
            sortedData = processRankData(data);

            const chartData = sortedData.map(item => ({
                value: item.value,
                name: getErrorType(item.category)
            }));

            const order = ['패턴 불량', '잉크 불량', '금도금 불량', '스크래치'];

            // 객체 배열을 정렬
            chartData.sort((a, b) => {
                return order.indexOf(a.name) - order.indexOf(b.name);
            });
            console.log(chartData)
            plotPieChart(chartData)

            console.log(data)

            const total = Object.values(data).reduce((sum, value) => sum + value, 0);

            let defectDataArray = [];
            const orderedKeys = ["pattern", "ink", "au", "scratch"];

            orderedKeys.forEach(key => {
                defectDataArray.push(data[key]);
            });

            let barChartData = {
                'total' : total,
                'errorCount' : defectDataArray
            }

            plotBarChart(barChartData)

        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 요청이 실패했을 때 실행할 코드
            console.error('AJAX 요청 실패:', textStatus, errorThrown);
        }
    });
}



// 에러 유형을 사람이 읽을 수 있는 이름으로 변환
function getErrorType(error) {
    switch (error) {
        case 'pattern':
            return '패턴 불량';
        case 'ink':
            return '잉크 불량';
        case 'au':
            return '금도금 불량';
        case 'scratch':
            return '스크래치';
        default:
            return '알 수 없음';
    }
  }


function plotPieChart(chartData) {
    
    var piChartDom = document.getElementById('defectPiChart');
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
                data: chartData
            }
        ]
    };
    piChart.setOption(piChartOption);
}

function processRankData(data) {
    // 모든 값의 총합 계산

    const total = Object.values(data).reduce((sum, value) => sum + value, 0);
    
    // 객체를 배열로 변환 후 값에 따라 내림차순으로 정렬
    const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);

    // 비율 계산 및 배열을 객체 형태로 변환하여 반환
    return sortedData.map(([category, value]) => ({
        category,
        value,
        proportion: ((value / total) * 100).toFixed(1) // 백분율 계산 후 소수점 1자리로 포맷
    }));
}

function plotBarChart(chartData) {

    console.log(chartData)

    const total = chartData['total']
    const errorCount = chartData['errorCount']

    const barColor = '#1b369e'

    // pattern Bar Chart

    var patternBarChartDom = document.getElementById('patternBarChart');
    var patternBarChart = echarts.init(patternBarChartDom);

    patternBarChartOption = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
        },
        xAxis: {
        type: 'category',
        data: ['패턴 불량 수']
        },
        yAxis: [
            {
            type: 'value',
            name: 'TotalDefects', 
            min: 0,
            max: total, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
            show: false
            }
        ],
        series: [
        {
            data: [errorCount[0]],
            type: 'bar',
            showBackground: true,
            emphasis: {
            focus: 'series'
            },
            backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.6)'
            },
            barWidth: '20%',
            itemStyle:{
            color: barColor,
            },
        }
        ]
    };

    patternBarChart.setOption(patternBarChartOption);

    // ink Bar Chart

    var inkBarChartDom = document.getElementById('inkBarChart');
    var inkBarChart = echarts.init(inkBarChartDom);

    inkBarChartOption = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
        },
        xAxis: {
        type: 'category',
        data: ['잉크 불량 수']
        },
        yAxis: [
            {
            type: 'value',
            name: 'TotalDefects', 
            min: 0,
            max: total, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
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
            barWidth: '20%',
            itemStyle:{
            color: barColor,
            },
        }
        ]
    };

    inkBarChart.setOption(inkBarChartOption);


    // au Bar Chart

    var auBarChartDom = document.getElementById('auBarChart');
    var auBarChart = echarts.init(auBarChartDom);

    auBarChartOption = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
        },
        xAxis: {
        type: 'category',
        data: ['금도금 불량 수']
        },
        yAxis: [
            {
            type: 'value',
            name: 'TotalDefects', 
            min: 0,
            max: total, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
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
            barWidth: '20%',
            itemStyle:{
            color: barColor,
            },
        }
        ]
    };

    auBarChart.setOption(auBarChartOption);


    // Scratch Bar Chart

    var scratchBarChartDom = document.getElementById('scratchBarChart');
    var scratchBarChart = echarts.init(scratchBarChartDom);

    scratchBarChartOption = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
        },
        xAxis: {
        type: 'category',
        data: ['스크래치 불량 수']
        },
        yAxis: [
            {
            type: 'value',
            name: 'TotalDefects', 
            min: 0,
            max: total, // 변수로 해서 추가하면 됨 # ex) totalDefects = 100 
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
            barWidth: '20%',
            itemStyle:{
            color: barColor,
            },
        }
        ]
    };

    scratchBarChart.setOption(scratchBarChartOption);

}