AOS.init();

//FORM
var btn = document.querySelector('#btn_form');
var close = document.querySelector('#close')
var form = document.querySelector('#my_form');
var footer = document.querySelector('#footer');

btn.addEventListener('click', () => {
form.style.display = 'block';
footer.style.height = '600px';
});

close.addEventListener('click', () => {
    form.style.display = 'none';
    footer.style.height = '240px';
});

//CAROUSEL
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
slider[currentSlide].classList.add('on')
}

function nextSlider() {
hideSlider()
if(currentSlide === slider.length -1) {
    currentSlide = 0
} else {
    currentSlide++
}
showSlider()
}

function prevSlider() {
hideSlider()
if(currentSlide === 0) {
    currentSlide = slider.length -1
} else {
    currentSlide--
}
showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

//GALERY
const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
}
};

document.addEventListener('mousemove', showImgContent);


//SCROLL SELECT
const links = document.querySelectorAll('.list-bar');
const sections = document.querySelectorAll('.sections');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if(top >= offset && top < offset + heightSection){
            links.forEach(link => {
                link.classList.remove('actived');

                document.querySelector(`header nav a[href*='${idSection}']`).classList.add('actived')
            })
        }
    })
});

//SCROLL BTN/LIST
const elements = document.querySelectorAll('.hidden-scroll');

const myObserver = new IntersectionObserver((a) => {
a.forEach((entry) => {
    if(entry.isIntersecting === true){
        entry.target.classList.add('show')
    }else{
        entry.target.classList.remove('show')
    }
})
});

elements.forEach((element) => {
    myObserver.observe(element)
})


//RESPONSIVE NAV
class MobileNavbar {
constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
}

animateLinks() {
    this.navLinks.forEach((link, index) => {
link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
        }s`);
    });
}

handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
}

init() {
    if (this.mobileMenu) {
    this.addClickEvent();
    }
    return this;
}
}

const mobileNavbar = new MobileNavbar(
".mobile-menu",
".list",
".list li",
);
mobileNavbar.init();