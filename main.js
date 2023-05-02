//change navbar styles on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // to change the show icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus"
        }
    })
})


// responsive navbar

// open menu
const menu = document.querySelector(".nav_menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})

// close menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}
closeBtn.addEventListener('click', closeNav)




// validation form



var jform = document.getElementById("meraform");

jform.addEventListener("submit", function (event) {
    var name = document.getElementsByName("First Name")[0];
    var email = document.getElementById("email");

    var namereg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namereg.test(name.value)) {
        alert("Please enter a valid name.");
        event.preventDefault();
    }

    if (!emailreg.test(email.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});


