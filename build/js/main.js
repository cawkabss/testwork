$(document).ready(function () {
    var $sliderList = $('.slider-list'),
        sliderView = $('.slider-view').width(),
        $next = $('.slider-control-next'),
        $prev = $('.slider-control-prev'),
        $sliderItem = $('.slider-i'),
        currentSlide = 0,
        marginLeft = 0,
        space = '',
        sliderITemWidth = '';


    function response (){
        if($(window).width() > 992){
            space = ((sliderView + 100)/2) - 25;
            sliderITemWidth = (sliderView + 50)/2 - 100;
            $.each($sliderItem, function(i, e){
                $(e).width(sliderITemWidth);
            });
        }
        else if($(window).width() > 768 && $(window).width() < 992){
            space = sliderView;
            sliderITemWidth = (sliderView - 270);
            $.each($sliderItem, function(i, e){
                $(e).width(sliderITemWidth);
            });
        }
        else if($(window).width() < 768){
            space = sliderView;
            sliderITemWidth = sliderView -100;
            $.each($sliderItem, function(i, e){
                $(e).width(sliderITemWidth);
            });
        }
    }
    response();
    

    $($next).on('click', function(e){

        if(currentSlide  == $sliderList.children().length -1){
            return;
        }
        currentSlide++;

        $sliderList.find('.active').css('opacity', 0).removeClass('active');
        console.log($sliderList.children().eq(currentSlide));
        $sliderList.children().eq(currentSlide).addClass('active');
        $sliderList.css('margin-left', marginLeft - space + 'px');
        marginLeft -= space;

    });
    $($prev).on('click', function(e){

        if(currentSlide  == 0){
            return;
        }
        currentSlide--;
        $sliderList.find('.active').removeClass('active');
        $sliderList.children().eq(currentSlide).addClass('active').css('opacity', 1);
        $sliderList.css('margin-left', marginLeft + space + 'px');
        marginLeft += space;

    });
});