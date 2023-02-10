function handleDynamicSectionColors() {
 var section = $('.clb__dark_section, .clb__light_section');
 var sectionClass;

 if (section.length) {
	var scrollTop = $('.scroll-top');
	var dynamicTypo = $('.dynamic-typo');
	var dynamicHeader = $('.header-dynamic-typo');
	var self_window;

	activeSection($(window));

	$(window).on('scroll', function () {
	   self_window = $(this);
	   activeSection(self_window);
	});

	function activeSection(self_window) {
	   var st = self_window.scrollTop() + self_window.height() / 2;
	   section.each(function () {

		  var sectionOffset = $(this).offset().top;
		  var currentSection = $(this);

		  //Fix for sticky footer
		  if (currentSection.hasClass('site-footer sticky')) {
			 if (!(st > ($(document).height() - self_window.height()))) {
				dynamicTypo.removeClass('dark-typo light-typo');
				dynamicHeader.removeClass('dark-typo light-typo');
				return;
			 }
		  }

		  if (currentSection.hasClass('clb__dark_section')) {
			 sectionClass = 'light-typo';
			 dynamicHeader.removeClass('dark-typo');
		  } else if (currentSection.hasClass('clb__light_section')) {
			 sectionClass = 'dark-typo';
			 dynamicHeader.removeClass('light-typo');
		  }

		  if (sectionOffset + currentSection.outerHeight() > st && st > sectionOffset) {
			 dynamicTypo.addClass(sectionClass);
			 dynamicHeader.addClass(sectionClass);

			 return false;
		  } else {
			 dynamicTypo.removeClass(sectionClass);
			 dynamicHeader.removeClass(sectionClass);
		  }
	   });
	}
 }
}
$(window).on('load', function () {
 handleDynamicSectionColors();
});

if (window.matchMedia("(max-width: 991px)").matches) {
 document.querySelector('.fs-two-item').remove();
}
if (window.matchMedia("(max-width: 480px)").matches) {
 document.querySelector('.at-work-one-item').remove();
}

let number = document.querySelector('.number'),
 numberTop = number.getBoundingClientRect().top,
 start = + number.innerHTML, end = + number.dataset.max;
window.addEventListener('scroll', function onScroll() {
 if (window.pageYOffset > numberTop - window.innerHeight / 1) {
	this.removeEventListener('scroll', onScroll);
	var interval = setInterval(function () {
	   number.innerHTML = ++start;
	   if (start == end) {
		  clearInterval(interval);
	   }
	}, 0);
 }
});
let number2 = document.querySelector('.number-two'),
 numberTop2 = number2.getBoundingClientRect().top,
 start2 = + number2.innerHTML, end2 = + number2.dataset.maxtwo;
window.addEventListener('scroll', function onScrollTwo() {
 if (window.pageYOffset > numberTop2 - window.innerHeight / 1) {
	this.removeEventListener('scroll', onScrollTwo);
	var interval2 = setInterval(function () {
	   number2.innerHTML = ++start2;
	   if (start2 == end2) {
		  clearInterval(interval2);
	   }
	}, 115);
 }
});