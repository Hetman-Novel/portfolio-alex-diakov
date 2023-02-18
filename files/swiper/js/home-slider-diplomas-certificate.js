if (document.querySelectorAll('.diplomas-certificate__item').length < 4) {
   document.getElementById('wrap-post-pagination-dc').remove();
}
const diplomas_certificate_slider = document.querySelector('.diplomas-certificate-slider')
if (diplomas_certificate_slider) {
   new Swiper(diplomas_certificate_slider, {

      // Стрелки
      navigation: {
         prevEl: '.diplomas-certificate__sw-btn-prev',
         nextEl: '.diplomas-certificate__sw-btn-next',
      },

      // Навигация
      // Буллеты, текущее положение, прогрессбар
      pagination: {
         el: '.diplomas-certificate__swiper-pagination',
         clickable: true,
         renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (index + 1) + '</div>';
         }
      },
      simulateTouch: false,
      slideToClickedSlide: true,

      // Автовысота
      //autoHeight: true,

      slidesPerView: 3,
      slidesPerGroup: 1,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 20,

      //loop: true,

      // Скорость
      speed: 800,
      effect: 'slide',

      breakpoints: {
         320: {
            spaceBetween: 25,
            slidesPerView: 1.2,
         },
         721: {
            spaceBetween: 25,
            slidesPerView: 2.2,
         },
         992: {
            spaceBetween: 35,
            slidesPerView: 2.2,
         },
         1025: {
            spaceBetween: 40,
            slidesPerView: 3,
         }
      },
   });
}