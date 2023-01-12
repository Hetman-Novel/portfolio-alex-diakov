(function ($) {
 "use strict";

 ////////////////////////////////////////////////////
 // 13. Masonary Js
 $('.archive__items').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.archive__items').isotope({
	   itemSelector: '.archive__item',
	   percentPosition: true,
	   masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1,
	   }
	});


	// filter items on button click
	$('.archive__filter-list').on('click', 'button', function () {
	   var filterValue = $(this).attr('data-filter');
	   $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.n_fBlocks_button').on('click', function (event) {
	   $(this).siblings('.active').removeClass('active');
	   $(this).addClass('active');
	   event.preventDefault();
	});

 });

})(jQuery);