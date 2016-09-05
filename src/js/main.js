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
        sliderMargin: 0,
        slideMargin: 0,
        sum: 0,
        $sliderWidth : $('.works-slider').width(),
        $sliderView : $('.works-slider')

    };

    function response (){
        slider.$sliderList = $('.works-slider-list');
        slider.$next = $('.slider-control-next');
        slider.$prev = $('.slider-control-prev');
        slider.$sliderItem = $('.works-slider-i');
        slider.currentSlide = 0;
        slider.$sliderWidth = $('.works-slider').width();
        $.each(slider.$sliderItem, function(){
            $(this).removeClass('hidden').removeClass('active');
        });
        slider.$sliderItem.first().addClass('active');
        slider.$sliderList.css('margin', 0);

        if($(window).width() > 980){
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
        else if($(window).width() < 980){
            clearInterval(slider.autoPlay);
            slider.autoPlay = setInterval(slideShowTablet2, 2000);
            slider.sum = 0;
            slider.sliderItemWidth = slider.$sliderWidth * 0.6 + 'px';
            slider.sliderItemMargin = '0 ' + slider.$sliderWidth * 0.1 + 'px';
            slider.slideMargin = - slider.$sliderWidth * 0.6 - slider.$sliderWidth * 0.1 * 2 ;

            slider.$sliderItem.css({
                'width': slider.sliderItemWidth,
                'margin': slider.sliderItemMargin
            });
            slider.$next.css('display', 'none');
            slider.$prev.css('display', 'none');

            if($(window).width() < 750){
                slider.sum = 0;
                slider.sliderItemWidth = slider.$sliderWidth - 30 + 'px';
                slider.sliderItemMargin = '0 ' + '15px';
                slider.slideMargin = - slider.$sliderWidth;
                slider.$sliderItem.css({
                    'width': slider.sliderItemWidth,
                    'margin': slider.sliderItemMargin
                });
            }
        }
    }

    $(window).resize(function(){
        response();

    });

    response();

    $(slider.$next).on('click', function(){

        if(slider.currentSlide + 1  == slider.$sliderList.children().length){
            return;
        }
        slider.currentSlide++;

        slider.$sliderList.children().eq(slider.currentSlide).addClass('active').prev().addClass('hidden').removeClass('active');
        slider.slideMargin = - slider.$sliderItem.eq(slider.currentSlide).width() - slider.$sliderWidth * 0.05 * 2;
        slider.sum += slider.slideMargin;
        slider.$sliderList.css('margin-left', slider.sum + 'px')

    });
    $(slider.$prev).on('click', function(){

        if(slider.currentSlide == 0){
            return;
        }
        slider.currentSlide--;
        slider.$sliderList.children().eq(slider.currentSlide).addClass('active').removeClass('hidden').next().removeClass('active');
        slider.slideMargin = - slider.$sliderItem.eq(slider.currentSlide).width() - slider.$sliderWidth * 0.05 * 2;
        slider.sum -= slider.slideMargin;
        slider.$sliderList.css('margin-left', slider.sum + 'px')

    });

        function slideShowTablet2() {
            if(slider.currentSlide == slider.$sliderItem.length - 1){
                $.each(slider.$sliderItem, function(){
                    $(this).removeClass('hidden').removeClass('active');
                });
                slider.$sliderItem.css({
                    'width': slider.sliderItemWidth,
                    'margin': slider.sliderItemMargin
                });
                slider.sum = 0;
                slider.sliderMargin = 0;
                slider.$sliderList.css('margin-left', '0');
                slider.currentSlide = 0;
                slider.$sliderList.children().eq(slider.currentSlide).addClass('active');
                return;
            }
            slider.currentSlide++;
            slider.$sliderList.children().eq(slider.currentSlide).addClass('active').prev().addClass('hidden').removeClass('active');
            slider.sum += slider.slideMargin;
            slider.$sliderList.css('margin-left', slider.sum + 'px')
        }

});


