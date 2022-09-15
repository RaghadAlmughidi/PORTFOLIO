let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
        navbar.classList.toggle('open-menu ');
        menu.classList.toggle('move');
    }
    //reviews swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

});
//EMAIL JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_np3rfdp", "template_8owxd58", {
        to_name: name,
        from_name: email,
        message: msg,
    });
}


function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successfully",

        icon: "success",
    });
}
//header background change on scoll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
        header.classList.toggle("header-active", window.scrollY > 0);
    })
    //scroll Top showsup when scroll down
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
})