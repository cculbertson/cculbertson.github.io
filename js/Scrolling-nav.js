

$(window).on("load",function() {
    $('.menu > a').click(function ( e ) {

        $(".menu > a").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab

    });

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop + 300 < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {

                    $(this).css( {
                        transition: 'opacity 0.5s linear',
                        opacity: 1
                    } );

                } else {

                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {

                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});


