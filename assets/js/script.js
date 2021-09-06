/* jshint esversion: 6 */ 

function scrollUp() {

    //window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    scrollPos = window.scrollY;
 
}

function turnInvisible () {

    let scrolled = window.scrollY;
    let btn = document.querySelector(".botao");

    if (scrolled === 0) {

        btn.classList.remove("visi");
        btn.classList.add("invi");
        

    } else {

        btn.classList.remove("invi");
        btn.classList.add("visi");
    }
}


