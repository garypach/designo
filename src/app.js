window.onload = function(){
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let submitButton = document.getElementsByClassName('form-button')[0];
let nameInput = document.getElementsByClassName('name-input')[0];
let phoneInput = document.getElementsByClassName('phone-input')[0];
let messageInput = document.getElementsByClassName('message-input')[0];

let emailInput = document.getElementsByClassName('email-input')[0];


let nameremoveErr = ()=>{
    document.getElementsByClassName("name-error-message")[0].classList.remove("name-error-message--active")
}

let emailremoveErr = ()=>{
    document.getElementsByClassName("email-error-message")[0].classList.remove("email-error-message--active")
}
let emailaddErr = ()=>{
    document.getElementsByClassName("email-error-message")[0].classList.add("email-error-message--active")
}

let phoneremoveErr = ()=>{
    document.getElementsByClassName("phone-error-message")[0].classList.remove("phone-error-message--active")
}
let messageremoveErr = ()=>{
    document.getElementsByClassName("message-error-message")[0].classList.remove("message-error-message--active")
}

submitButton.addEventListener('click', ()=>{
    if(document.getElementsByClassName('name-input')[0].value.length == 0){
        document.getElementsByClassName("name-error-message")[0].classList.add("name-error-message--active");
    }
    if(document.getElementsByClassName('email-input')[0].value.length == 0){
        document.getElementsByClassName("email-error-message")[0].classList.add("email-error-message--active");
    }

    if(document.getElementsByClassName('phone-input')[0].value.length == 0){
        document.getElementsByClassName("phone-error-message")[0].classList.add("phone-error-message--active");
    }

    if(document.getElementsByClassName('message-input')[0].value.length == 0){
        document.getElementsByClassName("message-error-message")[0].classList.add("message-error-message--active");
    }
})

nameInput.addEventListener('click', ()=>{
    nameremoveErr();
})
emailInput.addEventListener('click', ()=>{
    emailremoveErr();
})

phoneInput.addEventListener('click', ()=>{
    phoneremoveErr();
})

messageInput.addEventListener('click', ()=>{
    messageremoveErr();
})

}

