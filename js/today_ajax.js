$(document).ready(function() {
    // getTodayDefects
    // 오늘 전체 불량 개수 (pie Chart를 위함)
    $.ajax({
        url: '13.125.18.156/getTodayDefects', // 요청을 보낼 URI
        method: 'GET',
        dataType: 'json', // 반환받는 데이터의 타입을 JSON으로 지정
        success: function(response) {
            // 요청이 성공적으로 완료되었을 때 실행할 코드
            console.log(response); // JSON 데이터를 콘솔에 출력
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 요청이 실패했을 때 실행할 코드
            console.error('AJAX 요청 실패:', textStatus, errorThrown);
        }
    });
});