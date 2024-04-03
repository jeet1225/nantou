$(function() {
    $(window).on("resize", function() {
        if ($(this).width() > 1000) {
            $(".toggle").removeClass("active");
            $(".nav").removeAttr("style");
        }
    });
    $(".toggle").click(toggleSlideMenu);
    $(".nav").on("click", toggleMenu);

    var owl = $(".kvpicout.owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false/*,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            1250: {
                items: 3,
                dots: false
            }
        }*/
    });
    // Go to the next item
    $('.kv .arrr').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.kv .arrl').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $(".c2_step").on("click", "> div", function() {
        var $tab = $(this);
        if ($tab.hasClass("on")) {
            return;
        }
        var $page = $('.c2step_out .c2' + $tab.text()[0].toLowerCase());
        $('.c2step_out > div:not(.hide)').add($page).toggleClass("hide");
        $(".c2_step > div.on").add($tab).toggleClass("on");
    });

    $(".tag_out").on("click", "> div", function() {
        var $tab = $(this);
        if ($tab.hasClass("on")) {
            return;
        }
        var index = 1;
        if ($tab.hasClass("tag2")) {
            index = 2;
        } else if ($tab.hasClass("tag3")) {
            index = 3;
        }
        var $page = $('.w_cont .wc' + index);
        $('.w_cont > div:not(.hide)').add($page).toggleClass("hide");
        $(".tag_out > div.on").add($tab).toggleClass("on");
    });

    $(".wc2_tag").on("click", "> div", function() {
        var $tab = $(this);
        if ($tab.hasClass("on")) {
            return;
        }
        var index = 'a';
        if ($tab.hasClass("wc2t2")) {
            index = 'b';
        } else if ($tab.hasClass("wc2t3")) {
            index = 'c';
        } else if ($tab.hasClass("wc2t4")) {
            index = 'd';
        } else if ($tab.hasClass("wc2t5")) {
            index = 'e';
        }
        var $page = $('.wc2 .wc2' + index);
        $('.wc2 > div:not(.wc2_tag,.hide)').add($page).toggleClass("hide");
        $(".wc2_tag > div.on").add($tab).toggleClass("on");
    });
});

function toggleSlideMenu(event) {
    $(".toggle").toggleClass("active");
    $(".nav").slideToggle();
}
function toggleMenu(event) {
    if ($(".toggle:visible").hasClass("active")) {
        toggleSlideMenu(event)
    }
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}