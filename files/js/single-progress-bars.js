const s_progress_bars = document.querySelector('.insights__progresBars');

if (s_progress_bars) {
   var windowHeight = $(window).height();
   $(document).on('scroll', function () {
      $('.insights__progresBar').each(function () {
         let self = $(this), height = self.offset().top + self.height();
         if ($(document).scrollTop() + windowHeight >= height) {
            self.removeClass('width-zero')
         }
      });
   });
   $(".data-width").each(function () {
      let attr = $(this).attr('data-width');
      $(this).animate({ width: '' + attr + '' }, 2000);
   });
}