let tl = gsap.timeline()
function time(){
    let a =0 
    setInterval(function(){
        a = a+Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a= 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}
time()  

tl.to("#loader h1",{

    delay:0.5,
    duration:1.2,
    onStart: time()

})


tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:0.5,
})