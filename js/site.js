$(document).ready(function () {
    $("body").fadeIn("slow"),
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }),
	$(".learn-more").click(function (e) {
        e.preventDefault(), $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    }),
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    })
	$("#parallax-connect").parallax("50%", .8),
	$(".parallax-content").parallax("50%", .3),
	$.vegas("slideshow", {
        backgrounds: [{
            src: "img/backgrounds/1.jpg",
            fade: 1000
        }, {
            src: "img/backgrounds/2.jpg",
            fade: 1000
        }]
    })("overlay", {
        src: "img/overlays/16.png"
    }),
    $("#contact-form").validate({
        rules: {
            name: {
                minlength: 2,
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                minlength: 2,
                required: !0
            }
        },
        highlight: function (e) {
            $(e).closest(".control-group").removeClass("success").addClass("error")
        },
        success: function (e) {
            e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")
        }
    })
});
