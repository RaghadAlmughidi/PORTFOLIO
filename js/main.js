let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
        menu.classList.toggle('move')
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