$(document).ready(function () {
    // Bootstrap datepicker 초기화
    $('.datepicker-input').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
});
        
        
// 처리 상태 변환 함수
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

// 정렬된 데이터를 기반으로 테이블 업데이트
function populateTable(data) {
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
        cell6.textContent = item.inspection_date; // 발생일자
    });
}

// POST 요청을 통해 데이터 전송 및 데이터 가져오기
async function postData(start, end) {
    try {
        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST', // HTTP 메소드 설정
            headers: {
                'Content-Type': 'application/json', // JSON 형식으로 전송
            },
            body: JSON.stringify({ start, end }) // 전송할 데이터를 JSON 문자열로 변환
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json(); // JSON 형식으로 변환
        populateTable(data); // 테이블 업데이트
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

// 이벤트 리스너 설정
document.getElementById('submit-btn').addEventListener('click', () => {
    // 날짜 입력 값 가져오기
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // 날짜 유효성 검사
    if (startDate && endDate) {
        postData(startDate, endDate); // 데이터 전송 및 처리
    } else {
        alert('Please select both start and end dates.');
    }
});

// 초기 데이터 로딩
postData('2024-07-01', '2024-08-31'); // 기본 날짜를 설정하여 데이터를 초기화할 수 있습니다.
