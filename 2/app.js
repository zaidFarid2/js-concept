let tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.8,
})

tl.from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.4,
})
tl.from("#left h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.5,
})
tl.from("#right img",{
    scale:0.8,
    opacity:0,
    duration:0.8,
})



gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 .box",
        markers:true,
    }   
})