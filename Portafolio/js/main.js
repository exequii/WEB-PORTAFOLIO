window.addEventListener('scroll', function(){
    let experiencia = document.getElementById('experiencia');
    let posicionObj1 = experiencia.getBoundingClientRect().top;
    /*console.log(posicionObj1);*/
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){

        $('#columna1').addClass("animate__animated animate__slideInLeft");
        $('#columna2').addClass("animate__animated animate__slideInRight animate__delay-1s");
        $('#columna2').css("visibility", "visible");
    }
})

window.addEventListener('scroll', function(){
    let navLateral = document.getElementById('estadoScroll');
    let posicionObj3 = navLateral.getBoundingClientRect().bottom;
    console.log(posicionObj3);
    let tamañoDePantalla3 = window.innerHeight * 2;

    if(posicionObj3 < tamañoDePantalla3){
        navLateral.style.visibility = 'visible';
    }
})

$(document).ready(function(){

    var height = $(window).height();

    $('#cuadradoInicial').height(height);
    $('#experiencia').height(height);
    $('#aMover2').height(height);
    $('#cuadradoFinal').height(height);
});

