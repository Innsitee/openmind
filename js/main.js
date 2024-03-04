gsap.registerPlugin(ScrollTrigger);





const spTextLeft = document.querySelectorAll('.header-left')
const spTextRight = document.querySelectorAll('.header-right')
const spIntroTrig = document.querySelector('.header-row')

const spAboutIntroTlLeft = gsap.timeline({
    scrollTrigger: {
        trigger: spIntroTrig,
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
    }
})
const spAboutIntroTlRight = gsap.timeline({
    scrollTrigger: {
        trigger: spIntroTrig,
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
    }
})


spAboutIntroTlLeft.fromTo(spTextLeft,{
    x: 0
},
{
    x: "-70%",
    y: "30%",
   // scale: 0.5,
    //rotate: 90,
    opacity: 0
})

spAboutIntroTlRight.fromTo(spTextRight,{
    x: 0
},
{
    x: "70%",
    y: "30%",
    //scale: 0.5,
    //rotate: -90,
    opacity: 0
})