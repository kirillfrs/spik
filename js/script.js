const menu = document.querySelector('.hamburger');
const navigation = document.querySelector('.main-navigation__list');
const navigationLinks = document.querySelectorAll('.site-list__link');
// const popup = document.querySelector('.heeader-col__wrapper-podl');
const headerWrapper = document.querySelector('.header__wrapper');


const openMenu = () => {
  // navigation.parentNode.classList.remove('animate__backInUp');
  // navigation.parentNode.classList.add('animate__backInDown');


  menu.classList.add('is-active');
  navigation.classList.add('open');
  headerWrapper.classList.add('open');
  document.body.style.overflow = "hidden";
};

const closedMenu = () => {
  // navigation.parentNode.classList.add('animate__backInUp');
  // navigation.parentNode.classList.remove('animate__backInDown');


  menu.classList.remove('is-active');
  navigation.classList.remove('open');
  headerWrapper.classList.remove('open');

  document.body.style.overflow = "";
};




menu.addEventListener('click', () => {
  navigation.classList.toggle('open');

  if (navigation.classList.contains('open')) {
    openMenu();

  } else {
    closedMenu();


  }

});
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.toggle('open');
    if (navigation.classList.contains('open')) {
      openMenu();
      document.body.style.overflow = "";

    } else {
      closedMenu();


    }
  });
});
;
const swiper = new Swiper('.doctors__wrap', {
  pagination: {
    el: '.swiper-pagination',
  },
});

const sliderWrapper = document.querySelector('.doctors__wrap');
const sliderItems = document.querySelectorAll('.doctors__item');
// const screenWidth

const delSliderItem = () => {
  const screenWidth = window.screen.width;
  if (screenWidth > 769) {
    // console.log(screenWidth);
    // console.log('>769');
    // sliderWrapper.classList.remove('swiper-container');
    sliderItems.forEach(item => item.classList.remove('swiper-slide'));
    sliderItems.forEach(item => item.style = "");
    swiper.destroy();
  } else {
    // console.log(screenWidth);

    // console.log('<769');

    sliderItems.forEach(item => item.classList.add('swiper-slide'));
  }
};

delSliderItem();
setInterval(delSliderItem, 1500);

;
