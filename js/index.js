//выподающий список
const params = {
  btnClassName: "section-nav__item-btn",
  dropClassName: "section-nav__dropdown",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}
setMenuListener();

//аккордеон
$( function() {
  $( ".section-catalog__years" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true
   });

 } );

//табы
 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-catalog__painter-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.section-catalog__painter-link').forEach(function (btn) {
        btn.classList.remove('section-catalog__painter-link--active')
      });
      e.currentTarget.classList.add('section-catalog__painter-link--active');
      document.querySelectorAll('.section-catalog__img-text').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('section-catalog__img-text--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__img-text--active');
    });
  });
})

//выподаищий список через сhoices
const element = document.querySelector(".section-gallery__choices");
const choices = new Choices(element, {
  placeholder: true,
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

//свайпер картинки главный банер
var swiper = new Swiper(".section-banner__swipers", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//свайпер картинки в секции галерея
var swiper = new Swiper(".section-gallery__swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,

  pagination: {
    el: ".section-gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".section-gallery__button-next",
    prevEl: ".section-gallery__button-prev"
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    1010: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      beforeResize: function () {
        this.slides.forEach((el) => {
          el.style.marginTop = "";
      });
      }
    }

  });


//свайпер карточек в секции событии
const eventswiper = new Swiper('.section-events__swiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.section-events__button-next',
    prevEl: '.section-events__button-prev',
  },

  pagination: {
    el: '.section-events__swiper-pagination',
    clickable: true,
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    962: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      }
  },
});

//свайпер партнёров в секции проекты
const projectswiper = new Swiper('.section-projects__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,

  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: 47,
      slidesPerGroup: 2,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  navigation: {
    nextEl: '.section-projects__button-next',
    prevEl: '.section-projects__button-prev',
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
});

//тултип
tippy('.section-projects__tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 256,
});

tippy('.section-projects__tooltip-2', {
  content: 'В стремлении повысить качество',
  maxWidth: 256,
});

tippy('.section-projects__tooltip-3', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 256,
});

//маска на телефон для валидации
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validation = new JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "#D11616",
    textDecoration: "underlined",
    fontSize: "12px",
  },
});

//валидация
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимальная длина имени - 2",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Максимальная длина имени - 30",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: "Номер телефона некорректен",
    },
  ])
  .onSuccess((event) => {

  let formData = new FormData(event.target);
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
       let doneMessage = document.querySelector('.section-feedback__message');
       doneMessage.classList.add('visible-message');

       (function() {
        // Создаём таймер
        setTimeout(function() {
          doneMessage.classList.remove('visible-message'); // Меняем прозрачность
        }, 5000); // 10000 мсек = 10 сек
      })();
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  event.target.reset();
});

//карта
ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map ("map", {
        center: [55.758468, 37.601088],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );
  myMap.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout:'default#image',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [30,42],
      iconImageOffset: [-3,-42],
    });

  myMap.geoObjects.add(myPlacemark);
}

//павный скрол на сайте
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

//павный скрол на мобильной версии
(() => {
  const MOBILE_WIDTH = 580;

  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent (link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
    });
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        scrollToContent(this, true);
    });
  });
})();

//модальноые окна
$('.section-gallery__card').click(function(event) {
  $(this).modal({
    fadeDuration: 550,
    fadeDelay: 0.80
  });
  return false;
});

//бургер и поиск stop-scroll
const burger = document.querySelector('.section-nav__burger')
const nav = document.querySelector('.section-nav__wrapper')
const navItems = nav.querySelectorAll('.section-nav__item-link')
const body = document.body
const header = document?.querySelector('.section-nav')
const headerHeight = header.offsetHeight
const searchOpen = document.querySelector('.section-nav__search-button-2')
const search = document.querySelector('.section-nav__search-2')
const searchClose = document.querySelector('.section-nav__search-close')
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`)

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll')
  burger?.classList.toggle('section-nav__burger--active')
  nav?.classList.toggle('section-nav__wrapper--visible')
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll')
    burger?.classList.remove('section-nav__burger--active')
    nav?.classList.remove('section-nav__wrapper--visible')
  })
})

searchOpen.addEventListener('click', () => {
  searchOpen.classList.add('btn--hidden');
  search.classList.add('search--open');
})

searchClose.addEventListener('click', () => {
  searchOpen.classList.remove('btn--hidden');
  search.classList.remove('search--open');
})
