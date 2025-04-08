let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


const bodyElement = document.body;
if (bodyElement.classList.contains('home')) {
    $(document).ready(function(){
        $('.home-gallery').slick({
            arrows: false,
            speed: 2000,
            autoplay: true,
            pauseOnHover: false
        });
    });
}
