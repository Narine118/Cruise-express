$(document).foundation()
$(function(){
//  sliders
   if ($('.listing-slider').length) {
        $('.listing-slider').slick({
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1,
            arrows: true,
            dots: true,
             prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/next.png"></span></button>',
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        centerPadding: '15%'
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        centerPadding: '5%'
                    }
                }
            ]
        });
    }
     if ($('.customer-slider').length) {
        $('.customer-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-keyboard_arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-keyboard_arrow_right"></span></button>',
            fade: true,
            dots: false,
            centerMode: false
            
            
        });
    } 
    if($(".partners-slider").length){
        $(".partners-slider").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false,
                    }
                }
            ]
        });
    }
//    calendar
     $( function() {
    $( "#datepicker" ).datepicker();
  } );
//    search
    
        $(".search").click(function() {
          $(".search-block").toggleClass('show-block');
        })
//    mobile-menu
         $(".icon-menu").click(function() {
          $("body").toggleClass('open');
        })
        $(".icon-cross").click(function() {
          $("body").toggleClass('open');
        })
})