// js/scripts.js

$(document).ready(function(){
  // Initialize datepickers
  $('#start-date').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
  });

  $('#end-date').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
  });

  // Search button click event
  $('#searchButton').click(function() {
      // 여기서 검색 로직을 추가하거나 구현합니다.
      alert("Search button clicked!");
  });
});
