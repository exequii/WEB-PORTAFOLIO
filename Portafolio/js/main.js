window.addEventListener('scroll', function(){
    let animacion = document.getElementById('mover');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'movimiento 7s';
    }
})

window.addEventListener('scroll', function(){
    let animacion2 = document.getElementById('mover2');
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    console.log(posicionObj2);
    let tamañoDePantalla2 = window.innerHeight;

    if(posicionObj2 < tamañoDePantalla2){
        animacion2.style.animation = 'movimiento2 7s';
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
});

$(document).ready(function(){

    var height = $(window).height();

    $('#aMover').height(height);
});

$(document).ready(function(){

    var height = $(window).height();

    $('#aMover2').height(height);
});

$(document).ready(function(){

    var height = $(window).height();

    $('#cuadradoFinal').height(height);
});


