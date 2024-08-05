$(document).ready(function() {
  // 날짜 선택기 초기화
  flatpickr("#start-date", {
      dateFormat: "Y-m-d"
  });
  flatpickr("#end-date", {
      dateFormat: "Y-m-d"
  });

  // 차트 초기화
  var pieChart = initializePieChart();

  // 페이지 로드 시 임의의 데이터로 차트 및 테이블 초기화
  updatePieChart(pieChart, samplePieData);
  updateRankingTable(sampleRankingData);
  updateProductErrorTable(sampleProductErrorData);

  // 검색 버튼 클릭 이벤트
  $('#search-btn').click(function() {
      var startDate = $('#start-date').val();
      var endDate = $('#end-date').val();

      // 현재는 임의 데이터를 사용하여 페이지를 갱신함
      // 실제 구현 시, 아래의 부분을 AJAX 요청으로 대체
      updatePieChart(pieChart, samplePieData);
      updateRankingTable(sampleRankingData);
      updateProductErrorTable(sampleProductErrorData);
  });
});

// Ranking 테이블 갱신
function updateRankingTable(data) {
  var rankingHTML = '';
  data.forEach(function(item, index) {
      rankingHTML += '<tr><td>' + (index + 1) + '</td><td>' + item + '</td></tr>';
  });
  $('#ranking-table-body').html(rankingHTML);
}

// 제품 오류 테이블 갱신
function updateProductErrorTable(data) {
  var productErrorHTML = '';
  data.forEach(function(item) {
      productErrorHTML += '<tr><td>' + item.productId + '</td><td>' + item.errorType + '</td><td>' + item.width + '</td><td>' + item.height + '</td><td>' + item.status + '</td><td>' + item.date + '</td></tr>';
  });
  $('#product-error-table-body').html(productErrorHTML);
}
