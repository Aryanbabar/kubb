$(function(){
    // back-to-top;
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 200){
            $('header').addClass('bg');
        }
        else{
            $('header').removeClass('bg');
        }
    });
});




//animation scroll js
var html_body = $('html, body');
$('.main-menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500);
            return false;
        }
    }
});


// preloader;
$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut(500);
});



