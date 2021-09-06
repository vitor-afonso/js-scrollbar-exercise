/*jshint esversion: 6*/ 

function scrollUp() {

    let scrollPos;

    let visi = document.querySelector(".botao");

    //window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    scrollPos = window.scrollY;

    if (scrollPos === 0) {

        console.log(window.scrollY);
        
        visi.classList.add("visi");

    } 
}

//console.log(typeof window.scrollY);

