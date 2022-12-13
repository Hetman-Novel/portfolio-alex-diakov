if (document.querySelectorAll('.testimonials__slide').length < 2) {
   document.getElementById('testimonials-wrap-counter-arrows').remove();
}
const testimonials_slider = document.querySelector('.testimonials__slider')
if (testimonials_slider) {
   new Swiper(testimonials_slider, {

      // Стрелки
      navigation: {
         prevEl: '.testimonials__sw-btn-prev',
         nextEl: '.testimonials__sw-btn-next',
      },

      // Навигация
      // Буллеты, текущее положение, прогрессбар
      pagination: {
         el: '.swiper-pagination',

         // Фракция (Номер слайда / количиство слайдов)
         type: 'fraction',

         // Кастомный вывод фракции
         renderFraction: function (currentClass, totalClass) {
            return '<span id="testimonials-current-zero">0</span><span class="' + currentClass + '"></span><span class="testimonials__sep-number-slide">Separator</span><span id="testimonials-number-slides-zero">0</span><span class="' + totalClass + '"></span>';
         },

         // Прогрессбар
         //type: 'pregressbar', // Не работает
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
   });
}
if (document.querySelectorAll('.testimonials__slide').length > 11) {
   document.getElementById('testimonials-number-slides-zero').remove();
}