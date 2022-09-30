'use strict';
let buttons = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let closeModal =  document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })

}
closeModal.addEventListener("click", function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
})

 
// function outerFunction(){
//     let outerFunction = "I am outside"
//     function InnerFuction(){
//         let InnerFuctionVAr = "I am inside"
//     }
// }

const outerFunction = function(){
    let outerFunction = "I am outside"
}


//29/09/2022
//This keyword in practice.
const calcAge = function (birthYear){
    console.log(2022-birthYear)
    console.log(this)
}