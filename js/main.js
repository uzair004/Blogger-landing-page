//-------------- Navigation Bar --------------
const nav = document.querySelector('.nav');
const toggleCollapse = document.querySelector('.toggle-collapse');

toggleCollapse.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('collapse');
});

// -----X------Navigation Bar -----X-----

//-------------Carousel -----------------

const carouselSlider = document.querySelector('.carousel-slider');
const carouselDivs = document.querySelectorAll('.carousel-slider .slide');

const prevBtn = document.querySelector('.carousel-buttons .prevBtn');
const nextBtn = document.querySelector('.carousel-buttons .nextBtn');

let counter = 1;
const size = carouselDivs[0].offsetWidth;
carouselSlider.style.transform = `translateX(${-size * counter}px)`;

// Event Listerners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselDivs.length - 1) return;
    carouselSlider.classList.add('applyTransition');
    counter++;
    carouselSlider.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlider.classList.add('applyTransition');
    counter--;
    carouselSlider.style.transform = `translateX(${-size * counter}px)`;

});

carouselSlider.addEventListener('transitionend', () => {
    
    if(carouselDivs[counter].classList.contains('last-clone')) {
        carouselSlider.classList.remove('applyTransition');
        counter = carouselDivs.length - 2;
        carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    }

    if(carouselDivs[counter].classList.contains('first-clone')) {
        carouselSlider.classList.remove('applyTransition');
        counter = carouselDivs.length - counter;
        carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    }
});

setInterval(() => {
    if(counter >= carouselDivs.length - 1) return;
    carouselSlider.classList.add('applyTransition');
    counter++;
    carouselSlider.style.transform = `translateX(${-size * counter}px)`;  
} ,3000);


//------X------Carousel ---------X-------

//------------------ scroll to top button ----------------

const upArrow = document.querySelector('footer .move-up span');
upArrow.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

//------X----------- scroll to top button ---------X------
