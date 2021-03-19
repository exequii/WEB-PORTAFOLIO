/*

window.addEventListener('scroll', function(){
    let home = document.getElementById('section1');
    let experiencia = document.getElementById('section2');
    let proyectos = document.getElementById('section3');
    let contacto = document.getElementById('section4');

    let posicionObj1 = home.getBoundingClientRect().top;
    let posicionObj2 = experiencia.getBoundingClientRect().top;
    let posicionObj3 = proyectos.getBoundingClientRect().top;
    let posicionObj4 = contacto.getBoundingClientRect().top;

    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        $('#div1').css("color", "red");
    }
    if(posicionObj2 < tamañoDePantalla){
        $('#div2').css("color", "red");
    }
    if(posicionObj3 < tamañoDePantalla){
        $('#div3').css("color", "red");
    }
    if(posicionObj4 < tamañoDePantalla){
        $('#div4').css("color", "red");
    }
})
*/
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
});


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
/*
var projectNames = [ 'Home', 'Experiencia', 'Proyectos', 'Contactame']
$('#estadoScroll li').each(function(index){
    $(this).find('a').append(projectNames[index]);
});
*/

var numero = 1;
$(window).bind('mousewheel', function(event) {

    if (event.originalEvent.wheelDelta <= 0) {
        console.log(numero);
        if(numero >= 5){
            numero = 5;
        }
        else{
            numero++;
        }
        $('html, body').animate({  
            scrollTop: $('#section'+ numero).offset().top
            }, 100);
    }
    else {
        console.log(numero);
        if(numero <= 1){
            numero = 1;
        }
        else{
            numero--;
        }
        $('html, body').animate({
            scrollTop: $('#section'+ numero).offset().top
            }, 100);
    }
    switch(numero){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        }
    });

