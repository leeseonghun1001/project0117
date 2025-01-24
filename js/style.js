window.onload = function () {
  const visualSlide = new Swiper(".daegun_banner", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    //autoplay: {
    // delay: 2500,
    //  disableOnInteraction: false,
    //},
  });
  const newsSlide = new Swiper(".school_news", {
    slidesPerView: 3,
    spaceBetween : 100,
  });
};
