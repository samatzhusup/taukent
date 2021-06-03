/*
 Template Name: vacayhome
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 ) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $("#dropper").hover(function() {
        $(this).addClass("open");
    }, function() {
        $(this).removeClass("open");
    });
    $("#dropperr").hover(function() {
        $(this).addClass("open");
    }, function() {
        $(this).removeClass("open");
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    if(window.innerWidth<800){
        $(".img-fluid").attr("src","https://i.ibb.co/zxQ7dtB/image.png");
    }
    $(function(){
        var navbar = $('.header-inner');
        if(window.innerWidth>800){
            $(window).scroll(function(){
                if($(window).scrollTop() <=40 ){
                    navbar.removeClass('navbar-scroll');
                    $(".img-fluid").attr("src","https://tausamaly.kz/wp-content/uploads/2021/01/%D0%9B%D0%BE%D0%B3%D0%BE122.png");

                }else if(!window.innerWidth<800){
                    navbar.addClass('navbar-scroll');

                    $(".img-fluid").attr("src","https://i.ibb.co/zxQ7dtB/image.png");
                }
            });
        }
        else{
            $(window).scroll(function(){
                if($(window).scrollTop() <=40 ){
                    navbar.removeClass('navbar-scroll');

                }else if(!window.innerWidth<800){
                    navbar.addClass('navbar-scroll');


                }
            });
        }
    });


});