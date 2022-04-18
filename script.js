jQuery(document).ready(function(){ 



  $("#open_menu").click(function(){
    $(".responsive-menu ul").animate("slow");
    $(".navbar").toggleClass("active");

    });


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1460,
      settings: {
        // slidesToShow: 3,
      }
    }
  ]
  });
  


//   Praise section slider

$('.PRAISE_slider').slick({
    centerMode: true,
    centerPadding: '500px',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    responsive: [{
      breakpoint: 1800,
      settings: {
        centerPadding: '400px'
      }
    }, 
    {
      breakpoint: 1290,
      settings: {
        centerPadding: '350px'
      },
    },
    {
      breakpoint: 1080,
      settings: {
        centerPadding: '250px'
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: '150px'
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '100px'
      }
    },
    {
      breakpoint: 550,
      settings: {
        centerPadding: '0px'
      }
    },
  ]
  });
      


});