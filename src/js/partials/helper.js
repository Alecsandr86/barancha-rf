//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    /*******************************
     *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
     *******************************/
    $('a[href^="#s"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},2000,"easeInOutExpo");
        return false;
    });
    /*******************************
     *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
     *******************************/



    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    //$('.language li').bind('mouseenter mouseleave', function(){
    //    $('.language li').removeClass('active');
    //    $(this).addClass("active");
    //});

    $('.commandes .item').bind('mouseenter mouseleave', function(){
        //$('.commandes .item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.list-mixitup li').bind('click',function(){
        $('.list-mixitup li').removeClass('active');
        $(this).addClass('active');
    });
    $('.services-catalog .item').bind('mouseenter mouseleave', function(){
        $(this).toggleClass('active');
    })




    $('.sections').find('footer').fadeOut();
    $('.sections').find('.up-button').fadeOut();
    $('.wr-nav').find('.nav').fadeOut();
    $('.sections').find('.form-style').removeClass('fadeInLeft animated');
    $('.sections').find('.form-style').animate({'opacity':'0'});

    $('.wrapper-fluid').fullpage({
        //responsiveHeight : 945,
        //slidesNavigation: false,
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        scrollOverflow: true,
        //autoScrolling: false,
        resize : true,
        sectionSelector: '.sections',
        afterLoad: function(){
            $('.active').find('footer').fadeIn({
                duration: 500,
                easing: 'easeInQuad'
            });
            $('.active .wr-nav').find('.nav').fadeIn({
                duration: 500,
                easing: 'easeInQuad'
            });
            $('.active').find('.up-button').fadeIn({
                duration: 500,
                easing: 'easeInQuad'
            });
            $('.active').find('.form-style').animate({'opacity':'1'}).addClass('fadeInLeft animated');

        },
        onLeave: function(){
            $('.sections').find('footer').fadeOut();
            $('.wr-nav').find('.nav').fadeOut();
            $('.sections').find('.up-button').fadeOut();
            $('.sections').find('.form-style').removeClass('fadeInLeft animated');
            $('.sections').find('.form-style').animate({'opacity':'0'});
        }

    });


    $(document).on('click', '.moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    });
    $(document).on('click', '.page1', function(){
        $.fn.fullpage.moveTo('page1');
    });
    $(document).on('click', '.page2', function(){
        $.fn.fullpage.moveTo('page2');
    });
    $(document).on('click', '.page3', function(){
        $.fn.fullpage.moveTo('page3');
    });
    $(document).on('click', '.page4', function(){
        $.fn.fullpage.moveTo('page4');
    });
    $(document).on('click', '.page5', function(){
        $.fn.fullpage.moveTo('page5');
    });




    $('.services-catalog').mixItUp({
        load: {
            filter: '.category-1'
        }
    });





    /*******************************
     *       КНОПКА НА ВЕРХ
     *******************************/

    // кнопка
    //var UpButton = $('.UP-button');
    //
    //UpButton.css('opacity', 0);
    //
    //$('#header').waypoint(function(direction){
    //    if (direction === 'down') {
    //        alert('ok');
    //        UpButton.removeClass('animated fadeOutDown').css('opacity', 0);
    //        UpButton.css('opacity', 1).addClass('animated fadeInUp');
    //    }
    //    else {
    //        UpButton.removeClass('animated fadeInUp');
    //        UpButton.addClass('animated fadeOutDown').css('opacity', 0);
    //    }
    //}, {
    //    offset: '-15%'
    //});

    /*******************************
     *       КНОПКА НА ВЕРХ
     *******************************/
});