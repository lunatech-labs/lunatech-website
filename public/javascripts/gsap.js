const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-trigger",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=2000",
        toggleActions: "play pause play reset"
    }
});

tl.from(".test44", {
    opacity: 0,
    duration: 1
})
tl.from(".test45", {
    opacity: 0,
    duration: 1
})
tl.from(".test46", {
    opacity: 0,
    duration: 1
})






