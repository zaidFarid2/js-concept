
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
gsap.from("#page1 #box",{
    x:100,
    delay:0.5,
    duration:1,
    rotate:360,
})
gsap.from("#page2 #box",{
    x:1000,
    // delay:0.5,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",


    }
})