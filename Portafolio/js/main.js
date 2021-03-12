/*window.addEventListener('scroll', function(){
    let experiencia = document.getElementById('experiencia');
    let posicionObj1 = experiencia.getBoundingClientRect().top;
    /*console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){

        $('#div1').addClass("animate__animated animate__fadeIn");
        $('#div2').addClass("animate__animated animate__fadeIn animate__delay-1s");
        $('#div3').addClass("animate__animated animate__fadeIn animate__delay-2s");
        $('#div4').addClass("animate__animated animate__fadeIn animate__delay-3s");
        $('#div5').addClass("animate__animated animate__fadeIn  animate__delay-4s");
        $('#columna2').css("visibility", "visible");
    }
})
*/
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

