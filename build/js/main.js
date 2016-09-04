$(document).ready(function () {

    var slider = {
        autoPlay: '',
        sliderItemWidth: '',
        sliderItemMargin: '',
        $sliderList : $('.works-slider-list'),
        $next : $('.slider-control-next'),
        $prev : $('.slider-control-prev'),
        $sliderItem : $('.works-slider-i'),
        currentSlide : 0,
        $sliderWidth : $('.works-slider').width()

    };

    function response (){
        slider.$sliderList = $('.works-slider-list');
        slider.$next = $('.slider-control-next');
        slider.$prev = $('.slider-control-prev');
        slider.$sliderItem = $('.works-slider-i');
        slider.currentSlide = 0;
        slider.$sliderWidth = $('.works-slider').width();
        $.each(slider.$sliderItem, function(){
           $(this).removeClass('hidden').removeClass('active').css({
               'width': slider.sliderItemWidth,
               'margin': slider.sliderItemMargin
           });
        });
        slider.$sliderItem.first().addClass('active');
        if($(window).width() > 992){
            clearInterval(slider.autoPlay);
            slider.sliderItemWidth = slider.$sliderWidth * 0.4 + 'px';
            slider.sliderItemMargin = '0 ' + slider.$sliderWidth * 0.05 + 'px';

            slider.$sliderItem.css({
                'width': slider.$sliderWidth * 0.4 + 'px',
                'margin': '0 ' + slider.$sliderWidth * 0.05 + 'px'
            });
            $(slider.$next).css('display', 'block');
            $(slider.$prev).css('display', 'block');

        }
            else if($(window).width() < 992){
            clearInterval(slider.autoPlay);
            slider.autoPlay = setInterval(slideShowTablet2, 2000);

                slider.sliderItemWidth = slider.$sliderWidth * 0.6 + 'px';
                slider.sliderItemMargin = '0 ' + slider.$sliderWidth * 0.1 + 'px';

            slider.$next.css('display', 'none');
            slider.$prev.css('display', 'none');


             if($(window).width() < 768){
                slider.sliderItemWidth = slider.$sliderWidth + 'px';
                slider.sliderItemMargin = '0 15px 0 0';

            }
        }
    }


    $(window).resize(function(){
        response();

    });

    response();

    slider.$sliderItem.css({
        'width': slider.sliderItemWidth,
        'margin': slider.sliderItemMargin
    });
    $(slider.$next).on('click', function(){

        if(slider.currentSlide + 1  == slider.$sliderList.children().length){
            return;
        }
        slider.currentSlide++;

        slider.$sliderList.children().eq(slider.currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
            'width': 0,
            'margin': 0
        });

    });
    $(slider.$prev).on('click', function(){

        if(slider.currentSlide == 0){
            return;
        }
        slider.currentSlide--;
        slider.$sliderList.children().eq(slider.currentSlide).addClass('active').removeClass('hidden').css({
            'width': slider.$sliderWidth* 0.4 + 'px',
            'margin': '0 ' + slider.$sliderWidth * 0.05 + 'px'
        }).next().removeClass('active');

    });

        function slideShowTablet2() {
            if(slider.currentSlide == slider.$sliderItem.length){
                $.each(slider.$sliderItem, function(){
                    $(this).removeClass('hidden').removeClass('active');
                });
                slider.$sliderItem.css({
                    'width': slider.sliderItemWidth,
                    'margin': slider.sliderItemMargin
                });
                slider.currentSlide = -1;
            }

            slider.currentSlide++;
            slider.$sliderList.children().eq(slider.currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                'width': 0,
                'margin': 0
            });
        }

});
