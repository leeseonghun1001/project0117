$(document).ready(function () {
  // alert("제이쿼리 실행")
  // 메뉴 슬라이드
  $(".header_bottom").hover(
    function () {
      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
});
