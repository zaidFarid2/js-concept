let qiInput = document.querySelector(".qrInput")
let qrbtn = document.querySelector(".qrBtn")
let qrImg = document.querySelector(".qrImg")
// console.log(qiInput,qrImg,qrbtn)
qrbtn.addEventListener("click",function(e){
    inputVal = qiInput.value
    // console.log(inputVal)
    if( inputVal == ""){
        alert("Please Enter a valid URL")
        
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`
        qrImg.alt = `QR code fro that ${inputVal}`
    }
})