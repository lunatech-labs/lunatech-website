import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
    tl.to(".landing", {duration: 0.05, css: { overflowY: "hidden", height: "100vh" },});
    tl.to(".texts-container", {duration: 0, opacity: 1, ease: "Power3.easeOut",});
    tl.from(".texts-container span", {duration: 1.5, delay: 1, y: 70, skewY: 10, stagger: 0.4, ease: "Power3.easeOut",});
    tl.to(".texts-container span", {duration: 1, y: 70, skewY: -20, stagger: 0.2, ease: "Power3.easeOut",});
    tl.to(".landing", {duration: 0.05, css: { overflowY: "hidden", height: "unset" },});
    tl.to("body", {duration: 0.1, css: { overflowY: "scroll" }, ease: "power3.inOut",});
    tl.from(".landing__top .sub", {duration: 1, opacity: 0, y: 80, ease: "expo.easeOut",});
    tl.to(".preloader", {duration: 1.5, height: "0vh", ease: "Power3.easeOut", oncomplete: mobileLanding(),}, "-=2");
    tl.from(".landing__main .text", {duration: 2, y: 10, opacity: 0, stagger: {amount: 2,}, ease: "power3.easeInOut",});
    tl.from(".links .item", {duration: 0.5, opacity: 0, delay: window.innerWidth < 763 ? -3 : -0.6, stagger: {amount: 0.5,}, ease: "expo.easeOut", oncomplete: animateMainShape(),});
    tl.to(".preloader", {duration: 0, css: { display: "none" },});
};

// Background Hero
export const backgroundHero = () => {
    tl.to(".telescope", {opacity: 1, y: -95});
    tl.to(".grass", {opacity: 1, y: -190});
    tl.to(".mountains", {opacity: 1, y: -190});
    tl.to(".stars-bg", {opacity: 1, y: 100});
    tl.to(".moon", {opacity: 1, y: 10});
    tl.to(".clouds-bottom", {opacity: 1, y: -10});
    tl.to(".clouds-left", {opacity: 1, x: -100});
    tl.to(".clouds-right", {opacity: 1, x: 100});
}

// recurrent animations
export const mobileLanding = () => {
    window.innerWidth < 763 && tl.from(".landing__main2", {
        duration: 1,
        delay: 0,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut",
    });
};
const animateMainShape = () => {
    const infiniteTl = gsap.timeline({
        repeat: -1,
    });
    infiniteTl
    .to(".shapes .main-circle", {
        duration: 6,
        x: -30,
        y: -50,
        ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
        duration: 6,
        x: -30,
        y: 50,
        ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
        duration: 4,
        x: 0,
        y: 0,
        ease: "expo.easeOut",
    });
};
