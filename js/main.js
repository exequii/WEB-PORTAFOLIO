var numero = 1;
var propagacion = false;

$(window).on('beforeunload', function() {

    window.setTimeout(function() {
     $(window).scrollTop(0); 
 }, 0);
});

window.addEventListener('keyup',function(){
    
let home = document.getElementById('section1');
let experiencia = document.getElementById('section2');
let proyectos = document.getElementById('section4');
let contacto = document.getElementById('section5');

let posicionObj1 = home.getBoundingClientRect().top;
let posicionObj2 = experiencia.getBoundingClientRect().top;
let posicionObj3 = proyectos.getBoundingClientRect().top;
let posicionObj4 = contacto.getBoundingClientRect().top;

let tamañoDePantalla = window.innerHeight;

if(posicionObj1 < tamañoDePantalla){
    numero = 1;
}
if(posicionObj2 < tamañoDePantalla){
    numero = 2;
}
if(posicionObj3 < tamañoDePantalla){
    numero = 4;
}
if(posicionObj4 < tamañoDePantalla){
   numero = 5;
}
numeroScroll(numero);
});

function ubicacion(){
    let home = document.getElementById('section1');
    let experiencia = document.getElementById('section2');
    let proyectos = document.getElementById('section4');
    let contacto = document.getElementById('section5');

    let posicionObj1 = home.getBoundingClientRect().top;
    let posicionObj2 = experiencia.getBoundingClientRect().top;
    let posicionObj3 = proyectos.getBoundingClientRect().top;
    let posicionObj4 = contacto.getBoundingClientRect().top;

    let tamañoDePantalla = window.innerHeight;
    
    if(posicionObj1 < tamañoDePantalla){
        numero = 1;
    }
    if(posicionObj2 < tamañoDePantalla){
        numero = 2;
    }
    if(posicionObj3 < tamañoDePantalla){
        numero = 4;
    }
    if(posicionObj4 < tamañoDePantalla){
       numero = 5;
    }
    numeroScroll(numero);
}


$(document).ready(function(){
    $('.your-class').slick({
 
    });
});

$(document).ready(function(){

    var height = $(window).height();

    $('#section1').height(height);
    $('#section2').height(height);
    $('#section3').height(height);
    $('#section4').height(height);
    $('#section5').height(height);
});
/*
$(function (){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        
    });
  });
*/

/****************************** ASI COMO ESTA FUNCIONA CON EL SCROLL NORMAL ***************************/
var mediaqueryList = window.matchMedia("(min-width: 600px)");
if(mediaqueryList.matches) {
    $(window).bind('mousewheel', function(event) {

        if (event.originalEvent.wheelDelta <= 0) {
            console.log(numero);
            /*
            if(numero >= 6){
                numero = 6;
            }
            else{
                numero++;
                $('html, body').animate({  
                    scrollTop: $('#section'+ numero).offset().top
                    }, 500);
            }
        }
        else {
            console.log(numero);
            if(numero <= 1){
                numero = 1;
            }
            else{
                numero--;
                $('html, body').animate({
                    scrollTop: $('#section'+ numero).offset().top
                    }, 500);
            }
            */
        }
        ubicacion();
});
/**************************************************************************************************** */

/****************************** ASI FUNCIONA PARA SCROLL AUTOMATICO *********************************** */
/*
var mediaqueryList = window.matchMedia("(min-width: 600px)");
if(mediaqueryList.matches) {
    $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta <= 0) {
        console.log(numero);
        if(numero >= 6){
            numero = 6;
        }
        else{
            numero++;
            $('html, body').animate({  
                scrollTop: $('#section'+ numero).offset().top
                }, 500);
        }
    }
    else {
        console.log(numero);
        if(numero <= 1){
            numero = 1;
        }
        else{
            numero--;
            $('html, body').animate({
                scrollTop: $('#section'+ numero).offset().top
                }, 500);
        }
    }
    numeroScroll(numero);
    });
*/
/******************************************************************************************************* */
    $(function (){
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            centerMode: true,
            centerPadding: '0',
            
        });
      });
  }

  else{
    $(function (){
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            centerMode: true,
            centerPadding: '0',
            
        });
      });
  }


    function numeroScroll(numero){
        switch(numero){
            case 1:
                $('#div1').addClass('active');
                $('#div2').removeClass('active');
                $('#div3').removeClass('active');
                $('#div4').removeClass('active');
                $('#div5').removeClass('active');
                break;
    
            case 2:
                $('#div1').removeClass('active');
                $('#div2').addClass('active');
                $('#div3').removeClass('active');
                $('#div4').removeClass('active');
                $('#div5').removeClass('active');
                break;

            case 3:
                $('#div1').removeClass('active');
                $('#div2').addClass('active');
                $('#div3').removeClass('active');
                $('#div4').removeClass('active');
                $('#div5').removeClass('active');
            break;
    
            case 4:
                $('#div1').removeClass('active');
                $('#div2').removeClass('active');
                $('#div3').addClass('active');
                $('#div4').addClass('active');
                $('#div5').removeClass('active');
                break;
    
            case 5:
                $('#div1').removeClass('active');
                $('#div2').removeClass('active');
                $('#div3').removeClass('active');
                $('#div4').removeClass('active');
                $('#div5').addClass('active');
                break;
            }
    }

    function mostrar(aMostrar){
        if(($('#certificado1').css("visibility") == "hidden")&&($('#certificado2').css("visibility") == "hidden")&&($('#certificado3').css("visibility") == "hidden")){
            $(aMostrar).css("visibility", "visible");
            $('#fondoPopup').css("visibility", "visible");
            $(aMostrar).css("opacity", "1");
            $('#fondoPopup').css("opacity", "1");
            }
    }

    function cerrar(aCerrar){
        $('#certificado1').css("visibility", "hidden");
        $('#certificado1').css("opacity", "0");
        $('#certificado2').css("visibility", "hidden");
        $('#certificado2').css("opacity", "0");
        $('#certificado3').css("visibility", "hidden");
        $('#certificado3').css("opacity", "0");
        $('#fondoPopup').css("visibility", "hidden");
        $('#fondoPopup').css("opacity", "0");
    }

    function smooth(numero){
        switch(numero){
            case 1:
                $('html, body').animate({  
                    scrollTop: $('#section'+ numero).offset().top
                    }, 500);
                break;
            case 2:
                $('html, body').animate({  
                    scrollTop: $('#section'+ numero).offset().top
                }, 500);
                break;
            case 4:
                $('html, body').animate({  
                    scrollTop: $('#section'+ numero).offset().top
                }, 500);
                break;
            case 5:
                $('html, body').animate({  
                    scrollTop: $('#section'+ numero).offset().top
                }, 500);
                break;
        }
        numeroScroll(numero);
    }
