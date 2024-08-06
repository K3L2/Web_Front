// API로부터 데이터 가져오기 (순위 테이블용)
async function fetchRankData() {
  const defects_url = 'https://api.npoint.io/7745fc738d17063c507d';
  try {
      const response = await fetch(defects_url);
      // 네트워크 응답이 정상인지 확인
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json(); // JSON 형식으로 변환
      return data;
  } catch (error) {
      console.error('Error fetching rank data:', error);
  }
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
          return '스크레치';
      default:
          return '알 수 없음';
  }
}

// 데이터 처리 및 정렬, 비율 계산
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

// 정렬된 데이터를 기반으로 테이블 업데이트 (순위 테이블용)
function populateRankTable(data) {
  const tableBody = document.getElementById('rank-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // 기존 데이터 초기화

  data.forEach((item, index) => {
      const row = tableBody.insertRow(); // 새로운 행 추가
      const cell0 = row.insertCell(0); // 첫 번째 셀 (순위)
      const cell1 = row.insertCell(1); // 두 번째 셀 (카테고리)
      const cell2 = row.insertCell(2); // 세 번째 셀 (비율)
      const cell3 = row.insertCell(3); // 네 번째 셀 (값)

      cell0.textContent = index + 1; // 순위 설정
      cell1.textContent = getErrorType(item.category); // 카테고리 이름 설정
      cell2.textContent = `${item.proportion}%`; // 비율에 % 기호 추가
      cell3.textContent = item.value; // 값 설정
  });
}

// 데이터를 가져와서 처리하고 순위 테이블에 표시
fetchRankData().then(rawData => {
  const sortedData = processRankData(rawData); // 데이터 처리 및 정렬
  populateRankTable(sortedData); // 테이블 업데이트

  // 차트 데이터를 위한 형식으로 변환
  const chartData = sortedData.map(item => ({
      value: item.value,
      name: getErrorType(item.category)
  }));

  // 원차트 초기화 및 옵션 설정
  var pieChart = echarts.init(document.getElementById('pieChart'));

  // 차트 옵션 정의
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
              name: '불량 유형',
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
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: chartData // 변환된 차트 데이터 적용
          }
      ]
  };

  // 옵션을 차트에 설정하고 렌더링
  pieChart.setOption(option);
});
