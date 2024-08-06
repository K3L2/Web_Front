$(document).ready(function() {
    // 예제 데이터 배열
    var errorData = [
        { rank: 1, type: "패턴 불량", ratio: "50%", count: 500 },
        { rank: 2, type: "잉크 불량", ratio: "25%", count: 250 },
        { rank: 3, type: "스크래치 불량", ratio: "15%", count: 150 },
        { rank: 4, type: "금도금 불량", ratio: "10%", count: 100 }
    ];

    // 테이블의 tbody 요소를 선택
    var $tbody = $('#errorRankTable tbody');

    // 데이터 배열을 순회하며 행 추가
    errorData.forEach(function(item) {
        var $row = $('<tr></tr>');
        $row.append($('<th scope="row"></th>').text(item.rank));
        $row.append($('<td></td>').text(item.type));
        $row.append($('<td></td>').text(item.ratio));
        $row.append($('<td></td>').text(item.count));
        $tbody.append($row);
    });
});
