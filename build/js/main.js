$(document).ready(function () {

    var slider = {
        $sliderList : $('.works-slider-list'),
        $sliderItem : $('.works-slider-i'),
        $next : $('.slider-control-next'),
        $prev : $('.slider-control-prev'),
        $sliderWidth : $('.works-slider').width(),
        $sliderView : $('.works-slider'),
        currentSlide : 0,
        sliderItemCss: {
            width: 0,
            margin: 0
        },
        autoPlay: false,
        sliderInterval: '',
        sliderMarginStep: 0,
        sum: 0,
        device: {
            desktop: false,
            tablet: false,
            mobile: false
        }
    };

    function reset (){
        slider.device = {
            desktop: false,
            tablet: false,
            mobile: false
        };
        slider.currentSlide = 0;
        slider.sliderItemCss = {
            width: 0,
            margin: 0
        };
        slider.sum = 0;
        $.each(slider.$sliderItem, function(){
            $(this).removeClass('hidden').removeClass('active');
        });
        slider.$sliderItem.first().addClass('active');
        slider.$sliderList.css('margin', 0);
    }

    function responseSliderStyle (){
        clearInterval(slider.sliderInterval);
        if(slider.device.desktop){
            slider.sliderItemCss.width = slider.$sliderWidth * 0.4 + 'px';
            slider.sliderItemCss.margin = '0 ' + slider.$sliderWidth * 0.05 + 'px';
            slider.$sliderItem.css(slider.sliderItemCss);
            $(slider.$next).css('display', 'block');
            $(slider.$prev).css('display', 'block');
        }
        else if(slider.device.tablet || slider.device.mobile){
            slider.sliderInterval = setInterval(sliderAutoPlay, 2000);
            slider.$next.css('display', 'none');
            slider.$prev.css('display', 'none');

            if(slider.device.tablet){
                slider.sliderItemCss.width = slider.$sliderWidth * 0.6 + 'px';
                slider.sliderItemCss.margin = '0 ' + slider.$sliderWidth * 0.1 + 'px';
                slider.sliderMarginStep = - parseInt(slider.sliderItemCss.width) - slider.$sliderWidth * 0.1 * 2 ;

                slider.$sliderItem.css(slider.sliderItemCss);
            }
            else if(slider.device.mobile){
                slider.sliderItemCss.width = slider.$sliderWidth - 30 + 'px';
                slider.sliderItemCss.margin = '0 ' + '15px';
                slider.sliderMarginStep = - parseInt(slider.sliderItemCss.width) - 30 ;
                slider.$sliderItem.css(slider.sliderItemCss);
            }
        }
    }

    function response (){
        slider.$sliderList = $('.works-slider-list');
        slider.$next = $('.slider-control-next');
        slider.$prev = $('.slider-control-prev');
        slider.$sliderItem = $('.works-slider-i');
        slider.$sliderWidth = $('.works-slider').width();

        reset();

        if($(window).width() > 980){
            slider.device.desktop = true;
        }
        else if($(window).width() < 980){
            slider.device.tablet = true;

            if($(window).width() < 750){
                slider.device.mobile = true;
                slider.device.tablet = false;
            }
        }
        responseSliderStyle();
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
        slider.sliderMarginStep = - slider.$sliderItem.eq(slider.currentSlide).width() - slider.$sliderWidth * 0.05 * 2;
        slider.sum += slider.sliderMarginStep;
        slider.$sliderList.css('margin-left', slider.sum + 'px')

    });
    $(slider.$prev).on('click', function(){

        if(slider.currentSlide == 0){
            return;
        }
        slider.currentSlide--;
        slider.$sliderList.children().eq(slider.currentSlide).addClass('active').removeClass('hidden').next().removeClass('active');
        slider.sliderMarginStep = - slider.$sliderItem.eq(slider.currentSlide).width() - slider.$sliderWidth * 0.05 * 2;
        slider.sum -= slider.sliderMarginStep;
        slider.$sliderList.css('margin-left', slider.sum + 'px')

    });

        function sliderAutoPlay() {
            if(slider.currentSlide == slider.$sliderItem.length - 1){
                reset();
                return;
            }
            slider.currentSlide++;
            slider.$sliderList.children().eq(slider.currentSlide).addClass('active').prev().addClass('hidden').removeClass('active');
            slider.sum += slider.sliderMarginStep;
            slider.$sliderList.css('margin-left', slider.sum + 'px');
        }

});


