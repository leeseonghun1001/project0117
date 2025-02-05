window.onload = function () {
  //비주얼 스와이프
  const visualSlide = new Swiper(".daegun_banner", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
    delay: 2500,
     disableOnInteraction: false,
    },
  });
  // 학교소식 스와이프
  const newsSlide = new Swiper(".school_news", {
    slidesPerView: 1.4,
    spaceBetween: 26,
    breakpoints: {
      390: {
        slidesPerView: 2.4,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
     
    },
  });
};
