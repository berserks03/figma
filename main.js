const links = document.querySelectorAll("a");

links.forEach(link => link.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}

//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {    //safari || chrome, firefox ...
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top:0, behavior:"smooth"})
}

const burger = document.querySelector(".js-hamburger");

burger.addEventListener("click", ()=>{
    const isActive = burger.classList.contains("active")
    if (isActive) {
        burger.classList.remove("active")
    } else {
        burger.classList.add("active")
    }
    
})