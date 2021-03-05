let aboutSlider = $(".about-us__slider");
let clientsSlider = $(".clients__slider");

$(document).ready(function(){
  aboutSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1140,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {  
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      } 
    }]
  });

  $(".about-us__slider-prev").on("click", function(event){
    event.preventDefault();
    aboutSlider.slick("slickPrev");
  });
  
  $(".about-us__slider-next").on("click", function(event){
    event.preventDefault();
    aboutSlider.slick("slickNext");
  });

  clientsSlider.slick({
    arrows: false,
    dots: true,
    slidesToShow: 1, 
    slidesToScroll: 1
  });

});

