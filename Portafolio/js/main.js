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
/*
window.addEventListener('scroll', function(){
    let navLateral = document.getElementById('estadoScroll');
    let posicionObj3 = navLateral.getBoundingClientRect().bottom;
    console.log(posicionObj3);
    let tamañoDePantalla3 = window.innerHeight * 2;

    if(posicionObj3 < tamañoDePantalla3){
        navLateral.style.visibility = 'visible';
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
if ( index == 5 ){
    $('.go-down').attr('href', '#slide1' );
} else if ( index != 5 ){
    $('.go-down').attr('href', '#slide' + (nextIndex + 1) );
}
*/
var projectNames = [ 'Home', 'Experiencia', 'Proyectos', 'Contactame']
var numero = 1;
$('#estadoScroll li').each(function(index){
    $(this).find('a').append(projectNames[index]);
});


/*
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log(numero);
        if(numero >= 4){
            numero = 4;
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
            scrollTop: $('#section4'+ numero).offset().top
            }, 100);
    }
    });
*/
