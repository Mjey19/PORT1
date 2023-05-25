$(document).ready(function(){
    $('.slider_cards').slick({
        slidesToShow: 2,
        prevArrow: ".prev",
        nextArrow: ".next",
        responsive: [
            {
              breakpoint: 1260,
              settings: {
                slidesToShow: 1,
                
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
    });
  });