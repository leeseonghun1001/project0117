$(document).ready(function () {
  // alert("제이쿼리 실행")
  // 웹버전 메뉴 슬라이드
  $(".header_bottom").hover(
    function () {
      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
  // 공지사항, 가정통신문 변경
  $(".c1 h4").click(function () {
    $(".c1 h4, .c1 ul").removeClass("on");
    $(this).addClass("on").next("ul").addClass("on");
  });
  // 햄버거바 클릭하여 메뉴 나타나기
  $(".mb_menu").click(function () {
    $(".mobile-nav").animate(
      {
        left: 0,
      },
      300 // 애니메이션 지속 시간을 여기에 추가
    );
  });
  // 닫기버튼을 눌러서 메뉴 닫기.
  $("#close_menu").click(function () {
    $(".mobile-nav").animate(
      {
        left: -1000,
      },
      300
    );
  });
  //모바일 메뉴 세부내용 나타내기.
  // $(".gnb > li").hover(
  //   function () {
  //     $(this).find(".mb_depth2").stop().slideDown();
  //   },
  //   function () {
  //     $(this).find(".mb_depth2").stop().slideUp();
  //   }
  // );
  //모바일 메뉴 세부내용 나타내기.
  $(".gnb > li").click(function () {
   
    $(".mb_depth2").stop().slideUp(); // 다른 열린 메뉴 닫기
    $(this).find(".mb_depth2").stop().slideToggle(); // 현재 메뉴 열기/닫기
  });
});
