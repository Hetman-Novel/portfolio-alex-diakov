/*if (document.querySelectorAll('.portfolio__slide').length < 2) {
   document.getElementById('portfolio-wrap-counter-arrows').remove();
}*/
const portfolio_slider = document.querySelector('.portfolio-slider')
if (portfolio_slider) {
   new Swiper(portfolio_slider, {

      // Стрелки
      navigation: {
         prevEl: '.portfolio__sw-btn-prev',
         nextEl: '.portfolio__sw-btn-next',
      },

      // Навигация
      // Буллеты, текущее положение, прогрессбар
      pagination: {
         el: '.portfolio__swiper-pagination',
         clickable: true,
         renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (index + 1) + '</div>';
         }
      },
      simulateTouch: false,
      slideToClickedSlide: true,

      // Автовысота
      autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 1,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 40,

      loop: true,

      // Скорость
      speed: 800,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      parallax: true,

      // Работают по принципу мобайл ферст (от меньшего к большему)
      breakpoints: {
         961: {
            autoHeight: false,
         }
      },
   });
}
/*if (document.querySelectorAll('.testimonials__slide').length > 11) {
   document.getElementById('testimonials-number-slides-zero').remove();
}*/