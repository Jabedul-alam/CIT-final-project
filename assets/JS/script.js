$(function(){
    //study section slider

    $('.study_wrap').slick({
        slidesToShow: 4,
        SlidesToScroll: 1,
        speed: 800,
        prevArrow: '<i class="fas fa-chevron-left slider_icon slider_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right slider_icon slider_icon_right"></i>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                 
                }
    
              },
              {
                breakpoint:577 ,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    })

    //common section slider

    $('.slider').slick({
        slidesToShow: 4,
        SlidesToScroll: 1,
        speed: 800,
        prevArrow: '<i class="fas fa-chevron-left slider_icon slider_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right slider_icon slider_icon_right"></i>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                 
                }
    
              },
              {
                breakpoint:577 ,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    })

    //testimonial section slider
    $('.testimonial_content').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        SlidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                 
                }
    
              },
              {
                breakpoint:577 ,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    })

    //counter up
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });
});
