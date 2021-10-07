import $ from "jquery"
import Rellax from "rellax";
import Lottie from "lottie-web";
import 'slick-carousel-latest';
import headerAnimation from './lunatech-header.json';

/**
 * jQuery 3.x version of document.ready
 */
$(function() {

    /* Slider */
    $('.first-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: '60px',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.second-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: '60px',
        prevArrow: $('.second-prev'),
        nextArrow: $('.second-next')
    });

    /* Parallax scroll init */
    parallaxScroll();

    /* Menu toggles & sticky nav */
    var menuToggle = $('#menu-toggle'),
        menu = $('#menu'),
        navigation = $('#navigation'),
        langToggle = $('#language-toggle'),
        meta = $('#meta'),
        close = $('#close'),
        hamburger = $('#hamburger'),
        menuBg = $('#menu-bg'),
        logo = $('#logo'),
        logoSvg = $('#logo-svg'),
        clicker = true;

    $(langToggle).on('click', function() {
        $(meta).toggleClass('hidden');
    });

    $(menuToggle).on('click', function() {
        if (clicker){
            clicker = false;
            $(navigation).show();
            $(menu).addClass('menu');
            $(menuBg).addClass('bg-change h-screen');
            $(close).show();
            $(hamburger).hide();
        } else {
            clicker = true;
            $(navigation).hide();
            $(menu).removeClass('menu');
            $(menuBg).removeClass('bg-change h-screen');
            $(close).hide();
            $(hamburger).show();
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(menu).removeClass('absolute md:py-4');
            $(menu).addClass('fixed md:py-9');
            $(logo).addClass('mt-3 md:mt-0 md:h-12 md:w-44 brand-logo');
            $(logo).removeClass('mt-3 md:h-24 md:w-64');
            $(menuBg).addClass('active');
            $(logoSvg).addClass('active');
        } else {
            $(menu).removeClass('fixed md:py-9');
            $(menu).addClass('absolute md:py-4');
            $(logo).removeClass('mt-3 md:mt-0 md:h-12 md:w-44 brand-logo');
            $(logo).addClass('mt-3 md:h-24 md:w-64');
            $(menuBg).removeClass('active');
            $(logoSvg).removeClass('active');
        }
    });

    /* Contact toggles */
    var dutchToggle = $('#dutch-toggle'),
        franceToggle = $('#france-toggle'),
        belgiumToggle = $('#belgium-toggle'),
        contactDutch = $('.contact-dutch'),
        contactFrance = $('.contact-france'),
        contactBelgium = $('.contact-belgium');

    $(contactFrance).hide();
    $(contactBelgium).hide();
    $(dutchToggle).addClass('active');

    $(dutchToggle).on('click', function() {
        $(contactDutch).show();
        $(contactFrance).hide();
        $(contactBelgium).hide();
        $(this).addClass('active');
        $(franceToggle).removeClass('active');
        $(belgiumToggle).removeClass('active');
    });
    
    $(franceToggle).on('click', function() {
        $(contactFrance).show();
        $(contactDutch).hide();
        $(contactBelgium).hide();
        $(this).addClass('active');
        $(dutchToggle).removeClass('active');
        $(belgiumToggle).removeClass('active');
    });

    $(belgiumToggle).on('click', function() {
        $(contactBelgium).show();
        $(contactDutch).hide();
        $(contactFrance).hide();
        $(this).addClass('active');
        $(franceToggle).removeClass('active');
        $(dutchToggle).removeClass('active');
    });
});

/* Header animation */
var headerVisual = document.getElementById('headerVisual');
var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');


var animItem = Lottie.loadAnimation({
    wrapper: headerVisual,
    animType: 'svg',
    loop: true,
    animationData: headerAnimation
});

function changeText() {
    if (animItem.currentFrame <= 50) {
        text1.innerHTML = 'Giving you<br>space<br>to ';
        text2.innerHTML = ' excel';
    }
    if (animItem.currentFrame >= 50) {
        text2.innerHTML = 'discover';
    }
    if (animItem.currentFrame >= 100) {
        text2.innerHTML = 'grow';
    }
    if (animItem.currentFrame >= 150) {
        text1.innerHTML = 'Simplify<br>your IT';
        text2.innerHTML = '';
    }
}

animItem.addEventListener('enterFrame', (e) => {
    changeText();
});

/* Custom cursor */
var cursor = document.querySelector('.custom-cursor');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})

/* Parallax scroll */
function parallaxScroll() {
    var rellax = new Rellax('.rellax', {
        center: true
    });
    
    // Remove parallax on mobile
    function removeParallaxClass() {
        if (window.innerWidth < 981) {
            rellax.destroy();
        }
    }
    removeParallaxClass()
    addEventListener("resize", removeParallaxClass, false)
    
    function reAddParallaxClass() {
        if (window.innerWidth > 980) {
            rellax.refresh();
        }
    }
    reAddParallaxClass()
    addEventListener("resize", reAddParallaxClass, false)    
}

 