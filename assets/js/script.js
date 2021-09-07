/* jshint esversion: 6 */ 
window.addEventListener("scroll", turnInvisible, false); 

function scrollUp() {

    //window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function turnInvisible () {

    let btn = document.querySelector(".botao");

    if (window.scrollY === 0) {

        btn.classList.remove("visi");
        btn.classList.add("invi");
    } else {

        btn.classList.remove("invi");
        btn.classList.add("visi");
    }
}


