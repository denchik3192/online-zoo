const hedaerThemeSwitcher = document.querySelector('#dark-theme');
const page = document.querySelector('.light-theme');
const logo = document.querySelector('.header-logo-block img');
const rangeInputMain = document.querySelector('#myRange');
const sliderNumberMain = document.querySelector('.slider-numbers_main');
const rangeInputs = document.querySelectorAll('.zoo-slider-s input');
const sliderNumbers = document.querySelectorAll('.slider-numbers');
const leftArrow = document.querySelector('.left-arrow img');
const rightArrow = document.querySelector('.right-arrow img');
const pizarrowR = document.querySelector('.next');
const pizarrowL = document.querySelector('.prev');
const petsInZooSlider = document.querySelector(".pets-in-zoo-slider");

const gap = 16;

pizarrowR.addEventListener("click", e => {
    petsInZooSlider.scrollBy(width + gap, 0);
    
  });
    pizarrowL.addEventListener("click", e => {
    petsInZooSlider.scrollBy(-(width + gap), 0);
    
  });
  
  let width = petsInZooSlider.offsetWidth;
  window.addEventListener("resize", e => (width = petsInZooSlider.offsetWidth));



console.log(sliderNumbers);
function rangeValueMain() {

    let newValue = rangeInputMain.value;
    sliderNumberMain.innerHTML = `0${newValue}/<span>08</span>`;

}


function rangeValue() {

    let newValue = this.value;
    console.log(newValue);
    sliderNumbers.foreEach(n => {n.innerHTML = `0${newValue}/<span>0${this.max}</span>`});
}

rangeInputMain.addEventListener("input", rangeValueMain);

rangeInputs.forEach(input => { input.addEventListener("input", rangeValue);});



function switchTheme() {

    if (page.classList.contains('light-theme')) {
        page.classList.remove('light-theme');
        page.classList.add('dark-theme');
        logo.src = 'assets/images/zoo-logo-dark.svg';
        leftArrow.src = 'assets/images/testimonials/left-arrow-white.svg';
        rightArrow.src = 'assets/images/testimonials/right-arrow-white.svg';
    } else {
        page.classList.remove('dark-theme');
        page.classList.add('light-theme');
        logo.src = 'assets/images/zoo-logo.svg'
        leftArrow.src = 'assets/images/testimonials/left-arrow.svg';
        rightArrow.src = 'assets/images/testimonials/right-arrow.svg';
    }
    console.log('swithed');

}

hedaerThemeSwitcher.addEventListener('click', switchTheme)

