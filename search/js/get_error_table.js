// 처리 상태 변환 함수 (에러 테이블용)
function getProcessState(state) {
  switch (state) {
      case 0:
          return '대기';
      case 1:
          return '수리';
      case 2:
          return '폐기';
      default:
          return '알 수 없음';
  }
}

// 정렬된 데이터를 기반으로 테이블 업데이트 (에러 테이블용)
function populateErrorTable(data) {
  const tableBody = document.getElementById('error-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // 기존 데이터 초기화

  data.forEach((item, index) => {
      const row = tableBody.insertRow(); // 새로운 행 추가
      const cell0 = row.insertCell(0); // 첫 번째 셀 (순번)
      const cell1 = row.insertCell(1); // 두 번째 셀 (제품ID)
      const cell2 = row.insertCell(2); // 세 번째 셀 (에러 종류)
      const cell3 = row.insertCell(3); // 네 번째 셀 (가로길이)
      const cell4 = row.insertCell(4); // 다섯 번째 셀 (세로길이)
      const cell5 = row.insertCell(5); // 여섯 번째 셀 (처리상태)
      const cell6 = row.insertCell(6); // 일곱 번째 셀 (발생일자)

      cell0.textContent = index + 1; // 순번
      cell1.textContent = item.prodID; // 제품ID
      cell2.textContent = item.error_type; // 에러 종류
      cell3.textContent = item.w; // 가로길이
      cell4.textContent = item.h; // 세로길이
      cell5.textContent = getProcessState(item.process_state); // 처리상태
      cell6.textContent = item.date; // 발생일자
  });
}

// GET 요청을 통해 데이터 가져오기 (에러 테이블용)
async function fetchErrorData() {
  try {
      const response = await fetch('https://api.npoint.io/91f9718b7f743f7b45f2'); // API 엔드포인트
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      
      const data = await response.json(); // JSON 형식으로 변환
      populateErrorTable(data); // 테이블 업데이트
  } catch (error) {
      console.error('Error fetching error data:', error);
  }
}

// 초기 데이터 로딩 (에러 테이블용)
fetchErrorData(); // 페이지 로드 시 초기 데이터를 불러옵니다.
