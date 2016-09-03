$(document).ready(function () {
    var $sliderList = $('.works-slider-list'),
        $next = $('.slider-control-next'),
        $prev = $('.slider-control-prev'),
        $sliderItem = $('.works-slider-i'),
        currentSlide = 0,
        $sliderWidth = $('.works-slider').width();

    function response (){
        var $sliderList = $('.works-slider-list'),
            $next = $('.slider-control-next'),
            $prev = $('.slider-control-prev'),
            $sliderItem = $('.works-slider-i'),
            currentSlide = 0,
            $sliderWidth = $('.works-slider').width();
        if($(window).width() > 992){

            $sliderItem.css({
                'width': $sliderWidth * 0.4 + 'px',
                'margin': '0 ' + $sliderWidth * 0.05 + 'px'
            });
            $($next).css('display', 'block');
            $($prev).css('display', 'block');

        }
        else if($(window).width() > 769 && $(window).width() < 991){

            $sliderItem.css({
                'width': $sliderWidth * 0.6 + 'px',
                'margin': '0 ' + $sliderWidth * 0.1 + 'px'
            });
            $next.css('display', 'none');
            $prev.css('display', 'none');


            currentSlide = 0;
            (function(){
                $.each($sliderItem, function(){
                    $(this).removeClass('hidden');
                    $sliderItem.first().addClass('active')
                })
            })();
            window.tabletInterval = setInterval(slideShowTablet2, 2000);
            function slideShowTablet2() {

                if(currentSlide + 1  == $sliderList.children().length){
                    currentSlide = 0;
                    $.each($sliderList.children(), function(){
                        $(this).removeClass('active').removeClass('hidden').css({
                            'width': $sliderWidth * 0.6 + 'px',
                            'margin': '0 ' + $sliderWidth * 0.1 + 'px'
                        })
                    });
                    $sliderList.children().eq(currentSlide).addClass('active');

                    return slideShowTablet2();
                }

                currentSlide++;
                console.log(currentSlide);
                $sliderList.children().eq(currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                    'width': 0,
                    'margin': 0
                });
            }

        }
        else if($(window).width() < 768){

            $sliderItem.css({
                'width': $sliderWidth + 'px',
                'margin': '0 15px 0 0'
            });
            $next.css('display', 'none');
            $prev.css('display', 'none');

            currentSlide = 0;
            (function(){
                $.each($sliderItem, function(){
                    console.log($(this));
                    $(this).removeClass('hidden');
                    $sliderItem.first().addClass('active')
                })
            })();
             window.mobileInterval = setInterval(slideShowMobile, 2000);
            function slideShowMobile() {
                if(currentSlide + 1  == $sliderList.children().length){
                    currentSlide = 0;
                    $.each($sliderList.children(), function(){
                        $(this).removeClass('active').removeClass('hidden').css({
                            'width': $sliderWidth + 'px',
                            'margin': '0 15px 0 0'
                        })
                    });
                    $sliderList.children().eq(currentSlide).addClass('active');

                    return slideShowMobile();
                }
                currentSlide++;
                console.log(currentSlide);
                $sliderList.children().eq(currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                    'width': 0,
                    'margin': 0
                });
            }
        }
    }


    $(window).resize(function(){

        clearInterval(ll);
        clearInterval(kk);
        clearInterval(window.mobileInterval);
        clearInterval(window.tabletInterval);

        response();
    });



        if($(window).width() > 992){
            $sliderItem.css({
                'width': $sliderWidth * 0.4 + 'px',
                'margin': '0 ' + $sliderWidth * 0.05 + 'px'
            });
            $($next).css('display', 'block');
            $($prev).css('display', 'block');

            $($next).on('click', function(){

                if(currentSlide + 1  == $sliderList.children().length){
                    return;
                }
                currentSlide++;

                $sliderList.children().eq(currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                    'width': 0,
                    'margin': 0
                });

            });
            $($prev).on('click', function(){

                if(currentSlide == 0){
                    return;
                }
                currentSlide--;
                $sliderList.children().eq(currentSlide).addClass('active').removeClass('hidden').css({
                    'width': $sliderWidth* 0.4 + 'px',
                    'margin': '0 ' + $sliderWidth * 0.05 + 'px'
                }).next().removeClass('active');

            });

        }
        else if($(window).width() >= 768 && $(window).width() <= 992){
            $sliderItem.css({
                'width': $sliderWidth * 0.6 + 'px',
                'margin': '0 ' + $sliderWidth * 0.1 + 'px'
            });
            $next.css('display', 'none');
            $prev.css('display', 'none');
            var kk = setInterval(slideShowTablet2, 2000);

            function slideShowTablet2() {
                if(currentSlide + 1  == $sliderList.children().length){
                    currentSlide = 0;
                    $.each($sliderList.children(), function(){
                        $(this).removeClass('active').removeClass('hidden').css({
                            'width': $sliderWidth * 0.6 + 'px',
                            'margin': '0 ' + $sliderWidth * 0.1 + 'px'
                        })
                    });
                    $sliderList.children().eq(currentSlide).addClass('active');

                    return slideShowTablet2();
                }

                currentSlide++;
                $sliderList.children().eq(currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                    'width': 0,
                    'margin': 0
                });
            }

        }
        else if($(window).width() < 768){

            $sliderItem.css({
                'width': $sliderWidth + 'px',
                'margin': '0 15px 0 0'
            });
            $next.css('display', 'none');
            $prev.css('display', 'none');

            var ll = setInterval(slideShowMobile, 2000);
            function slideShowMobile() {
                if(currentSlide + 1  == $sliderList.children().length){
                    currentSlide = 0;
                    $.each($sliderList.children(), function(){
                        $(this).removeClass('active').removeClass('hidden').css({
                            'width': $sliderWidth + 'px',
                            'margin': '0 15px 0 0'
                        })
                    });
                    $sliderList.children().eq(currentSlide).addClass('active');

                    return slideShowMobile();
                }

                currentSlide++;
                console.log(currentSlide);
                $sliderList.children().eq(currentSlide).addClass('active').prev().addClass('hidden').removeClass('active').css({
                    'width': 0,
                    'margin': 0
                });
            }
        }

});
