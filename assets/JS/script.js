$(function(){
    //study section slider

    $('.study_wrap').slick({
        slidesToShow: 4,
        SlidesToScroll: 1,
        speed: 800,
        prevArrow: '<i class="fas fa-chevron-left slider_icon slider_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right slider_icon slider_icon_right"></i>',
    })

    //common section slider

    $('.slider').slick({
        slidesToShow: 4,
        SlidesToScroll: 1,
        speed: 800,
        prevArrow: '<i class="fas fa-chevron-left slider_icon slider_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right slider_icon slider_icon_right"></i>',
    })

    //testimonial section slider
    $('.testimonial_content').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        SlidesToScroll: 1,
        autoplaySpeed: 3000,
    })

    //counter up
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });
});
