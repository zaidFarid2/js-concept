let tl = gsap.timeline()



tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y :-100,
    duration:1,
    opacity: 0,
    delay:1,
    stagger:0.5,
})
tl.from("#main h1",{
    y :100,
    opacity:0,
    stagger:0.5,
})
tl.from("#main>img",{
    y :80,
    scale:0,
    opacity:0,
    stagger:0.3,
})
tl.from("#main h5",{
    scale: 0,
    opacity:0,

})
tl.to("#main h5",{
    y:20,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})
