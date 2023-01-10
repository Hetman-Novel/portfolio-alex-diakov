/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backToTop": () => (/* binding */ backToTop),
/* harmony export */   "dynamicAdapt": () => (/* binding */ dynamicAdapt),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "nCustomCursor": () => (/* binding */ nCustomCursor),
/* harmony export */   "nHeader": () => (/* binding */ nHeader),
/* harmony export */   "nLazyLoading": () => (/* binding */ nLazyLoading),
/* harmony export */   "nPopUp": () => (/* binding */ nPopUp),
/* harmony export */   "nSelect": () => (/* binding */ nSelect),
/* harmony export */   "nSpollers": () => (/* binding */ nSpollers),
/* harmony export */   "nWhatAscreen": () => (/* binding */ nWhatAscreen)
/* harmony export */ });
function nCustomCursor() {
   // After update OptimizedHTML5
   let mouseX, mouseY, posX, posY
   document.addEventListener('DOMContentLoaded', () => {
      const body = document.querySelector('body')
      body.addEventListener('mousemove', e => {
         mouseCoords(e)
         cursor.classList.remove('hidden')
         follower.classList.remove('hidden')
      })
      const cursor = document.getElementById('cursor'),
         follower = document.getElementById('aura'),
         links = document.getElementsByTagName('a'),
         hidden_links = document.querySelectorAll('.hidden-link'),
         buttons = document.querySelectorAll('.button'),
         btn_top = document.querySelector('.wrap-back-top__text'),
         accordion_title = document.querySelectorAll('.block__title');
      //swiper_btn_prev = document.querySelectorAll('.swiper-button-prev'),
      //swiper_btn_next = document.querySelectorAll('.swiper-button-next');

      mouseX = 0, mouseY = 0, posX = 0, posY = 0
      function mouseCoords(e) {
         mouseX = e.pageX
         mouseY = e.pageY
      }
      gsap.to({}, .01, {
         repeat: -1,
         onRepeat: () => {
            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5
            gsap.set(cursor, {
               css: {
                  left: mouseX,
                  top: mouseY
               }
            })
            gsap.set(follower, {
               css: {
                  left: posX - 18,
                  top: posY - 18
               }
            })
         }
      })
      for (let i = 0; i < links.length; i++) {
         links[i].addEventListener('mouseover', () => {
            cursor.classList.add('hover')
            follower.classList.add('hover')
         })
         links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('hover')
            follower.classList.remove('hover')
         })
      }
      btn_top.addEventListener('mouseover', () => {
         cursor.classList.add('hover')
         follower.classList.add('hover')
      })
      btn_top.addEventListener('mouseout', () => {
         cursor.classList.remove('hover')
         follower.classList.remove('hover')
      })
      for (let i = 0; i < hidden_links.length; i++) {
         hidden_links[i].addEventListener('mouseover', () => {
            cursor.classList.add('hidden-hover')
            follower.classList.add('hidden-hover')
         })
         hidden_links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('hidden-hover')
            follower.classList.remove('hidden-hover')
         })
      }
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener('mouseover', () => {
            cursor.classList.add('button-hover')
            follower.classList.add('button-hover')
         })
         buttons[i].addEventListener('mouseout', () => {
            cursor.classList.remove('button-hover')
            follower.classList.remove('button-hover')
         })
      }
      for (let i = 0; i < accordion_title.length; i++) {
         accordion_title[i].addEventListener('mouseover', () => {
            cursor.classList.add('button-hover')
            follower.classList.add('button-hover')
         })
         accordion_title[i].addEventListener('mouseout', () => {
            cursor.classList.remove('button-hover')
            follower.classList.remove('button-hover')
         })
      }
      body.addEventListener('mouseout', () => {
         cursor.classList.add('hidden')
         follower.classList.add('hidden')
      })
   })
}
function nWhatAscreen() {
   // Определение операционной системы и браузер
   const isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
   }

   // Проверка. Если одно из устройст с тачскрином
   if (isMobile.any()) {
      // Если ПК. Добавляется класс _touch к Body
      document.body.classList.add('_touch');
      // Собераются все стрелки с классом menu__arrow в переменную
      let menuArrows = document.querySelectorAll('.menu__arrow');
      // Есть ли стрелки в массиве
      if (menuArrows.length > 0) {
         for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
               menuArrow.parentElement.classList.toggle('_active');
            });
         }
      }
   } else {
      // Если тачскрин. Добавляется класс _pc к Body
      document.body.classList.add('_pc');
   }

   // Меню бургер
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   }
}
function nHeader() {
   const headerElement = document.querySelector('.header');
   if (headerElement) {
      const callback = function (entries, observe) {
         if (entries[0].isIntersecting) {
            headerElement.classList.remove('n_scroll');
         } else {
            headerElement.classList.add('n_scroll');
         }
      }
      const headerObserver = new IntersectionObserver(callback);
      headerObserver.observe(headerElement);
   }

   let lastScroll = 0;
   const defaultOffset = 200;
   const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTo;
   const containHide = () => headerElement.classList.contains('n_hidden');

   window.addEventListener('scroll', () => {

      if (scrollPosition() > lastScroll && !containHide()) {
         // scroll down
         headerElement.classList.add('n_hidden');
      } else if (scrollPosition() < lastScroll && containHide()) {
         // scroll top
         headerElement.classList.remove('n_hidden');
      }

      lastScroll = scrollPosition();
   })
}
function isWebp() {
   // Проверка поддержки webp 
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   };
   // Добавление класса webp или no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}
function dynamicAdapt() {
   // Dynamic Adapt v.1
   // HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
   // e.x. data-da="item, 2, 991"
   // Andrikanych Yevhen 2020
   // https://www.youtube.com/c/freelancerlifestyle

   "use strict";

   (function () {
      let originalPositions = [];
      let daElements = document.querySelectorAll('[data-da]');
      let daElementsArray = [];
      let daMatchMedia = [];
      //Заполняем массивы
      if (daElements.length > 0) {
         let number = 0;
         for (let index = 0; index < daElements.length; index++) {
            const daElement = daElements[index];
            const daMove = daElement.getAttribute('data-da');
            const daArray = daMove.split(',');
            const daPlace = daArray[1] ? daArray[1].trim() : 'last';
            const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
            if (daArray.length > 0) {
               daElement.setAttribute('data-da-index', number);
               //Заполняем массив первоначальных позиций
               originalPositions[number] = {
                  "parent": daElement.parentNode,
                  "index": indexInParent(daElement)
               };
               //Заполняем массив элементов 
               daElementsArray[number] = {
                  "element": daElement,
                  "destination": document.querySelector('.' + daArray[0].trim()),
                  "place": daPlace,
                  "breakpoint": daBreakpoint
               }
               number++;
            }
         }
         dynamicAdaptSort(daElementsArray);

         //Создаем события в точке брейкпоинта
         for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daBreakpoint = el.breakpoint;
            const daType = "max"; //Для MobileFirst поменять на min

            daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
            daMatchMedia[index].addListener(dynamicAdapt);
         }
      }
      //Основная функция
      function dynamicAdapt(e) {
         for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daElement = el.element;
            const daDestination = el.destination;
            const daPlace = el.place;
            const daBreakpoint = el.breakpoint;
            const daClassname = "_dynamic_adapt_" + daBreakpoint;

            if (daMatchMedia[index].matches) {
               //Перебрасываем элементы
               if (!daElement.classList.contains(daClassname)) {
                  let actualIndex = indexOfElements(daDestination)[daPlace];
                  if (daPlace === 'first') {
                     actualIndex = indexOfElements(daDestination)[0];
                  } else if (daPlace === 'last') {
                     actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                  }
                  daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                  daElement.classList.add(daClassname);
               }
            } else {
               //Возвращаем на место
               if (daElement.classList.contains(daClassname)) {
                  dynamicAdaptBack(daElement);
                  daElement.classList.remove(daClassname);
               }
            }
         }
         customAdapt();
      }

      //Вызов основной функции
      dynamicAdapt();

      //Функция возврата на место
      function dynamicAdaptBack(el) {
         const daIndex = el.getAttribute('data-da-index');
         const originalPlace = originalPositions[daIndex];
         const parentPlace = originalPlace['parent'];
         const indexPlace = originalPlace['index'];
         const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
         parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
      }
      //Функция получения индекса внутри родителя
      function indexInParent(el) {
         var children = Array.prototype.slice.call(el.parentNode.children);
         return children.indexOf(el);
      }
      //Функция получения массива индексов элементов внутри родителя 
      function indexOfElements(parent, back) {
         const children = parent.children;
         const childrenArray = [];
         for (let i = 0; i < children.length; i++) {
            const childrenElement = children[i];
            if (back) {
               childrenArray.push(i);
            } else {
               //Исключая перенесенный элемент
               if (childrenElement.getAttribute('data-da') == null) {
                  childrenArray.push(i);
               }
            }
         }
         return childrenArray;
      }
      //Сортировка объекта
      function dynamicAdaptSort(arr) {
         arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
         });
         arr.sort(function (a, b) {
            if (a.place > b.place) { return 1 } else { return -1 }
         });
      }
      //Дополнительные сценарии адаптации
      function customAdapt() {
         const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
   }());

   /*
   let block = document.querySelector('.click');
   block.addEventListener("click", function (e) {
      alert('Все ок ;)');
   });
   */

   /*
   //Объявляем переменные
   const parent_original = document.querySelector('.content__blocks_city');
   const parent = document.querySelector('.content__column_river');
   const item = document.querySelector('.content__block_item');
 
   //Слушаем изменение размера экрана
   window.addEventListener('resize', move);
 
   //Функция
   function move(){
      const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (viewport_width <= 992) {
         if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
         }
      } else {
         if (item.classList.contains('done')) {
            parent_original.insertBefore(item, parent_original.children[2]);
            item.classList.remove('done');
         }
      }
   }
 
   //Вызываем функцию
   move();
 
   */
}
function nLazyLoading() {
   const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
   const loadMapBlock = document.querySelector('._load-map');
   const windowHeight = document.documentElement.clientHeight;
   const loadMoreBlock = document.querySelector('._load-more');

   let lazyImagesPositions = [];
   if (lazyImages.length > 0) {
      lazyImages.forEach(img => {
         if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
         }
      });
   }

   window.addEventListener("scroll", lazyScroll);

   function lazyScroll() {
      if (document.querySelectorAll('img[data-src],source[data-srcset]')) {
         lazyScrollCheck();
      }
      /*if (!loadMapBlock.classList.contains('_loaded')) {
         getMap();
      }
      if (!loadMoreBlock.classList.contains('_loading')) {
         loadMore();
      }*/
   }

   // data-src="images/image.jpg"
   // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
   function lazyScrollCheck() {
      let imgIndex = lazyImagesPositions.findIndex(
         item => pageYOffset > item - windowHeight
      );
      if (imgIndex >= 0) {
         if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
            lazyImages[imgIndex].addEventListener("load", event => {
               lazyImages[imgIndex].parentNode.classList.add('loaded');
            });
         } else if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset');
            lazyImages[imgIndex].addEventListener("load", event => {
               lazyImages[imgIndex].parentNode.classList.add('loaded');
            });
         }
         delete lazyImagesPositions[imgIndex];
      }
   }

   // Google Maps iframe Generator - https://www.maps.ie/create-google-map/
   // data-map="https://"
   /*function getMap() {
      const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageXOffset
      if (pageXOffset > loadMapBlockPos - windowHeight) {
         const loadMapUrl = loadMapBlock.dataset.map;
         if (loadMapUrl) {
            loadMapBlock.insertAdjacentHTML("beforeend", `<iframe src="${loadMapUrl}" loading="lazy" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0"></iframe>`);
            loadMapBlock.classList.add('_loaded')
            loadMapBlock.removeAttribute('data-map')
         }
      }
   }
   const mapElement = document.querySelector('.');
   if (mapElement.length > 0) {
 
   }
   */

   // добавить класс _load-more к родительскому блоку в котором нужно будет подгружать элементы
   /*function loadMore() {
      const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageXOffset;
      const loadMoreBlockHeight = loadMoreBlock.offsetHeight;
      if (pageXOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
         getContent();
      }
   }
   const loadMoreElement = document.querySelector('._load-more');
   if (loadMoreElement.length > 0) {
      
   }
   */

   /*async function getContent() {
      if (!document.querySelector('._loading-icon')) {
         loadMoreBlock.insertAdjacentHTML(
            "beforeend",
            `<div class="_loading-icon"><span class="sk-spinner-pulse sk-spinner"></span></div>`
         );
      }
      loadMoreBlock.classList.add('_loading');
 
      let response = await fetch('_more-elements.html', {
         method: 'GET',
      });
      if (response.ok) {
         let result = await response.text();
         loadMoreBlock.insertAdjacentHTML('beforeend', result);
         loadMoreBlock.classList.remove('_loading');
         if (document.querySelector('._loading-icon')) {
            document.querySelector('._loading-icon').remove();
         }
      } else {
         alert("Erorr loading more");
      }
   }*/
}
function nPopUp() {
   // Для запуска окна к ссылке нужно добавить класс popup-link и id окна после символа # в атрибут href
   // К фиксированным блокам которые занимают всю ширину экрана, нужно добавить класс lock-padding
   // чтобы при исчезновении скролла контент не прыгал.
   // Так же можно запуска другое окно из контента уже открытого окна.
   const popupLinks = document.querySelectorAll('.popup-link');
   const body = document.querySelector('body');
   const lockPadding = document.querySelectorAll('.lock-padding');
   let unlock = true;
   let timeout = 600; /* Должно быть равным с значением в transition в css коде */
   if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index];
         popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
         });
      }
   }
   const popupCloseIcon = document.querySelectorAll('.close-popup');
   if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
         const el = popupCloseIcon[index];
         el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
         });
      }
   }
   function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
         const popupActive = document.querySelector('.popup.open');
         if (popupActive) {
            popupClose(popupActive, false);
         } else {
            bodyLock();
         }
         curentPopup.classList.add('open');
         curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
               popupClose(e.target.closest('.popup'));
            }
         });
      }
   }
   function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
         popupActive.classList.remove('open');
         if (doUnlock) {
            bodyUnLock();
         }
      }
   }
   function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
         }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');
      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }
   function bodyUnLock() {
      setTimeout(function () {
         if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
               const el = lockPadding[index];
               el.style.paddingRight = '0px';
            }
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock');
      }, timeout);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }
   document.addEventListener('keydown', function (e) {
      if (e.which === 27) {
         const popupActive = document.querySelector('.popup.open');
         popupClose(popupActive);
      }
   });
   (function () {

      if (!Element.prototype.closest) {

         Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
               if (node.matches(css)) return node;
               else node = node.parentElement;
            }
            return null;
         };
      }
   })();
   (function () {

      if (!Element.prototype.matches) {

         Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
      }
   })();
}
function nSelect() {
   let select = function () {
      let selectHeader = document.querySelectorAll('.select__header');
      let selectItem = document.querySelectorAll('.select__item');
      let selectBody = document.querySelector('.select__body');

      selectHeader.forEach(item => {
         item.addEventListener('click', selectToggle)
      });
      selectItem.forEach(item => {
         item.addEventListener('click', selectChoose)
      });
      function selectToggle() {
         this.parentElement.classList.toggle('is-active');
      }
      function selectChoose() {
         let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
         currentText.innerText = text;
         select.classList.remove('is-active');
      }
      selectBody.addEventListener('click', function (e) {
         const items = document.querySelectorAll('.select__item')
         const target = e.target
         Array.from(items).forEach(item => {
            item.classList.remove('current-lang')
         })
         target.classList.add('current-lang')
      });
   };
   select();
}
function nSpollers() {
   // Spollers
   const spollersArray = document.querySelectorAll('[data-spollers]');
   if (spollersArray.length > 0) {
      // Получение обычных спойлеров
      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
         return !item.dataset.spollers.split(",")[0];
      });
      // Инициализация обычных спойлеров
      if (spollersRegular.length > 0) {
         initSpollers(spollersRegular);
      }

      // Получение спойлеров с медиа запросами
      const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
         return item.dataset.spollers.split(",")[0];
      });

      // Инициализация спойлеров с медиа запросами
      if (spollersMedia.length > 0) {
         const breakpointsArray = [];
         spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
         });

         // Получаем уникальные брейкпоинты
         let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
         });
         mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
         });

         // Работаем с каждым брекпоинтом
         mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Обьекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true;
               }
            });
            // Событие
            matchMedia.addListener(function () {
               initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
         });
      }
      // Инициализация
      function initSpollers(spollersArray, matchMedia = false) {
         spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
               spollersBlock.classList.add('_init');
               initSpollerBody(spollersBlock);
               spollersBlock.addEventListener("click", setSpollerAction);
            } else {
               spollersBlock.classList.remove('_init');
               initSpollerBody(spollersBlock, false);
               spollersBlock.removeEventListener("click", setSpollerAction);
            }
         });
      }
      // Работа с контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
         if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
               if (hideSpollerBody) {
                  spollerTitle.removeAttribute('tabindex');
                  if (!spollerTitle.classList.contains('_active')) {
                     spollerTitle.nextElementSibling.hidden = true;
                  }
               } else {
                  spollerTitle.setAttribute('tabindex', '-1');
                  spollerTitle.nextElementSibling.hidden = false;
               }
            });
         }
      }
      function setSpollerAction(e) {
         const el = e.target;
         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
               if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                  hideSpollersBody(spollersBlock);
               }
               spollerTitle.classList.toggle('_active');
               _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
         }
      }
      function hideSpollersBody(spollersBlock) {
         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
         if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
         }
      }
   }

   // SlideToggle
   let _slideUp = (target, duration = 500) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         target.style.transitionProperty = 'height, margin, padding';
         target.style.transitionDuration = duration + 'ms';
         target.style.height = target.offsetHeight + 'px';
         target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = 0;
         target.style.paddingTop = 0;
         target.style.paddingBottom = 0;
         target.style.marginTop = 0;
         target.style.marginBottom = 0;
         window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideDown = (target, duration = 500) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         if (target.hidden) {
            target.hidden = false;
         }
         let height = target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = '0';
         target.style.paddingTop = '0';
         target.style.paddingBottom = '0';
         target.style.marginTop = '0';
         target.style.marginBottom = '0';
         target.offsetHeight;
         target.style.transitionProperty = 'height, margin, padding';
         target.style.transitionDuration = duration + 'ms';
         target.style.height = height + 'px';
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideToggle = (target, duration = 500) => {
      if (target.hidden) {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
function backToTop() {
   const to_top_btn = document.getElementById("back-to-top");
   window.onscroll = function () {
      if (window.pageYOffset > 580) {
         to_top_btn.classList.add('show');
      } else {
         to_top_btn.classList.remove('show');
      }
   }
   to_top_btn.addEventListener("click", function () {
      window.scrollBy({ top: -document.documentElement.scrollHeight, behavior: "smooth" });
   });
}

/* ====================================== -> Dynamic Adapt HTML

<div class="" data-da="item, 2, 991">

/* ====================================== -> Images HTML

<div class="wrap-image">
   <img class="__image" data-src="https://picsum.photos/id/555/600/600" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
   <span class="sk-spinner-pulse sk-spinner"></span>
</div>

/* ====================================== -> Map HTML

<div class="wrap-map" data-map="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD,%20%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,%2073000+(no%20company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
   <span class="sk-spinner-pulse sk-spinner"></span>
</div>

/* ====================================== -> Pop Up HTML

<!-- Это объверстка всего контента, если класс другой, его нужно заменить в функции bodyLock() -->
<div class="wrapper"></div>

<a href="#popup_01" class="popup-link">Запустить окно</a>

<div id="popup_01" class="popup"> <!-- popup-video -->
   <div class="popup__body">
      <div class="popup__content"> <!-- popup__content-image -->
         <!--<a href="" class="popup__close close-popup">X</a>-->
   
         Контент окна

      </div>
   </div>
</div>

/* ====================================== -> Select HTML

<div class="select">
   <div class="select__header">
      <span class="select__current">Value 1</span>
      <div class="select__icon">&times;</div>
   </div>
   <div class="select__body">
      <div class="select__item current-lang">Value 1</div>
      <div class="select__item">Value 2</div>
      <div class="select__item">Value 3</div>
      <div class="select__item">Value 4</div>
      <div class="select__item">Value 5</div>
   </div>
</div>

/* ====================================== -> Breadcrumbs HTML

<ul class="breadcrumbs">
   <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="/">Home</a>
   </li>
   <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="blog.html">Blog</a>
   </li>
   <li class="breadcrumbs__item">
      <span class="breadcrumbs__name">Title post</span>
   </li>
</ul>

/* ====================================== -> Spollers HTML

- Для родителя спойлеров добавляем атрибут data-spollers
- Для заголовков спойлеров добавляем атрибут data-spoller
- Если нужно включать/выключать работу спойлеров на разных
- разрешениях экранов пишем параметры ширины и типа брейкпоинтаю.

- Если нужно чтобы блок был изначально открыытый,
- нужно добавить клвсс _active к классу block__title

- Например: 
- data-spoylers="992,max" - спойлер будет работать только на экранах меньше или равно 992px
- data-spoylers="768,min" - спойлер будет работать только на экранах больше или равно 768px

- Если нужно чтобы в блоке открывался только один спойлер добавляем атрибут data-one-spoller

- Разметка:

<div data-spollers data-one-spoller class="block block_1">
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер №1</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis quis
         delectus culpa velit eum. Eos,
         voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
         officia?</div>
   </div>
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер №2</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis quis
         delectus culpa velit eum. Eos,
         voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
         officia?</div>
   </div>
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер №3</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis quis
         delectus culpa velit eum. Eos,
         voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
         officia?</div>
   </div>
</div>
<div data-spollers="650,min" class="block block_2">
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Сполер работает на экранах >=
         650</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis quis
         delectus culpa velit eum. Eos,
         voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
         officia?</div>
   </div>
</div>
<div data-spollers="800,max" class="block block_3">
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Спойлер №1 работает на экранах <=
            800</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis
               quis
               delectus culpa velit eum. Eos,
               voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
               officia?</div>
   </div>
   <div class="block__item">
      <button tabindex="-1" type="button" data-spoller class="block__title">Спойлер №2 работает на экранах <=
            800</button>
      <div class="block__text">Inventore asperiores repellendus voluptatem minus sequi, in pariatur omnis
               quis
               delectus culpa velit eum. Eos,
               voluptatum. Molestias itaque eveniet quas dicta non deserunt? Error accusantium optio amet dolore
               officia?</div>
   </div>
</div>

*/

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nCustomCursor();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nWhatAscreen();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nHeader();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.dynamicAdapt();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nLazyLoading();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nSelect();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nSpollers();

window.onload = function () {

   document.getElementById('cursor').classList.remove('opacity');
   document.getElementById('aura').classList.remove('opacity');

   _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.nPopUp();

   _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.backToTop();

   function progressBar() {
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = scroll / height * 100;
      document.getElementById('progressBar').style.width = scrolled + '%';
   }
   window.addEventListener('scroll', progressBar);
}

if (window.innerWidth > 961) {
   const main_portfolio = document.getElementById('main-portfolio');
   if (main_portfolio) {
      const portfolio_swiper_pagination = document.getElementById('portfolio-swiper-pagination');
      const height_pagination_portfolio = main_portfolio.clientHeight;
      if (portfolio_swiper_pagination) {
         portfolio_swiper_pagination.style.height = height_pagination_portfolio + 'px';
      }
   }
}

const links = document.querySelectorAll('.hidden-link');
links.forEach(function (link) {
   link.onclick = function () {
      window.open(link.dataset.url);
   };
});
})();

/******/ })()
;