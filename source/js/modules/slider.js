import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSliderAdv() {
  const slider = document.querySelector('.advantages__slider');
  const wrapper = slider.querySelector('.advantages__list');
  const slides = wrapper.querySelectorAll('.advantages__item');

  const breakpointMob = window.matchMedia('(max-width: 1019px)');

  const breakpointChecker = () => {
    if (breakpointMob.matches) {
      slider.classList.add('swiper');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach((item) => {
        item.classList.add('swiper-slide');
      });

      const swiper = new Swiper('.advantages__slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        observer: true,
        watchSlidesProgress: true,
        resizeObserver: true,
        updateOnWindowResize: true,

        navigation: {
          nextEl: '.advantages__button-next',
          prevEl: '.advantages__button-prev',
        },

        pagination: {
          el: '.advantages__pagination',
          bulletElement: 'bullet',
          bulletClass: 'advantages__pagination-bullet',
          bulletActiveClass: 'advantages__pagination-bullet-active',
          type: 'bullets',
          clickable: true,

          on: {
            init: function onFocus() {
              'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
            },
          },
        },

        ally: {
          paginationBulletMessage: 'Go to slide {{index}}',
        },

        allowTouchMove: true,

        breakpoints: {
          300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          700: {
            slidesPerView: 2,
            spaceBetween: 25,
            width: 545,
            slidesPerGroup: 2,
          },
        },


      });
    } else {
      slider.classList.remove('swiper');
      wrapper.classList.remove('swiper-wrapper');
      slides.forEach((item) => {
        item.classList.remove('swiper-slide');
      });
    }
  };
  breakpointMob.addListener(breakpointChecker);
  breakpointChecker();
}

export function initSliderPromo() {
  const slider = document.querySelector('.promo__slider');
  const wrapper = slider.querySelector('.promo__list');
  const slides = wrapper.querySelectorAll('.promo__item');

  const breakpointMob = window.matchMedia('(max-width: 1019px)');

  const breakpointChecker = () => {
    if (breakpointMob.matches) {
      slider.classList.add('swiper');
      wrapper.classList.add('swiper-wrapper');
      slides.forEach((item) => {
        item.classList.add('swiper-slide');
      });

      const swiper = new Swiper('.promo__slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        observer: true,
        watchSlidesProgress: true,
        resizeObserver: true,
        updateOnWindowResize: true,

        navigation: {
          nextEl: '.promo__button-next',
          prevEl: '.promo__button-prev',
        },

        pagination: {
          el: '.promo__pagination',
          bulletElement: 'bullet',
          bulletClass: 'promo__pagination-bullet',
          bulletActiveClass: 'promo__pagination-bullet-active',
          type: 'bullets',
          clickable: true,

          on: {
            init: function onFocus() {
              'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
            },
          },
        },

        ally: {
          paginationBulletMessage: 'Go to slide {{index}}',
        },

        allowTouchMove: true,

        breakpoints: {
          300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          700: {
            slidesPerView: 2,
            spaceBetween: 25,
            width: 545,
            slidesPerGroup: 2,
          },
        },


      });
    } else {
      slider.classList.remove('swiper');
      wrapper.classList.remove('swiper-wrapper');
      slides.forEach((item) => {
        item.classList.remove('swiper-slide');
      });
    }
  };
  breakpointMob.addListener(breakpointChecker);
  breakpointChecker();
}
