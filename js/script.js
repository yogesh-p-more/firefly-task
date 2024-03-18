$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    $(".menu-icon").click(function () {
        $(".menu-list").addClass("active");
    });
    $(".close-icon, .menu-list ul li").click(function () {
        $(".menu-list").removeClass("active");
    });

    if ($(window).width() <= 1023) {
        $(".achivment .boxes").slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    $(".slides").slick({
        dots: false,
        arrows: false,
        infinite: true,
        loop: true,
        speed: 3000,
        autoplay: true,
        focusOnSelect: true,
        autoplaySpeed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".slides2").slick({
        dots: false,
        arrows: false,
        infinite: true,
        loop: true,
        speed: 3000,
        autoplay: true,
        focusOnSelect: true,
        autoplaySpeed: 800,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

