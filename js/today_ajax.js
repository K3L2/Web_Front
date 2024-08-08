$(document).ready(function() {
    
    getTodayDefects();

});

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

            plotPieChart(chartData)
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
    console.log(chartData)
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
