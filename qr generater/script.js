let qrLink ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let enterText =document.querySelector(".intext")
let generateQR =document.querySelector(".generate")
let img =document.querySelector("#qrimage")
let animation =document.querySelector(".qr")

function generateQrCode(){
    if(enterText.value.length > 0){
        img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${enterText.value}`
        animation.classList.add("show-img")
    }
    else{
        enterText.classList.add("error")

        setTimeout(()=>{

            enterText.classList.remove("error")
        },1000)
    }


}
