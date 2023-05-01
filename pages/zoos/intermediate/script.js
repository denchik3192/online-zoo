const hedaerThemeSwitcher = document.querySelector('#dark-theme');
const page = document.querySelector('.light-theme');
const logo = document.querySelector('.header__logo img');
const rangeInput = document.querySelector('input[type="range"]');
const sliderNumber = document.querySelector('.slider-numbers_main');

function rangeValue() {

    let newValue = rangeInput.value;
    sliderNumber.innerHTML = `0${newValue}/<span>08</span>`;

    }

rangeInput.addEventListener("input", rangeValue);


function switchTheme() {

    if (page.classList.contains('light-theme')) {
        page.classList.remove('light-theme');
        page.classList.add('dark-theme');
        logo.src = './../../../assets/images/zoo-logo-dark.svg';
        
    } else {
        page.classList.remove('dark-theme');
        page.classList.add('light-theme');
        logo.src = './../../../assets/images/zoo-logo.svg';
    }
    console.log('swithed');

}

hedaerThemeSwitcher.addEventListener('click', switchTheme)