

var owl = $('.owl1.owl-carousel');

owl.owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        550: {
            items: 4
        },
        768: {
            items: 5
        },
        992: {
            items: 7
        },
        1200: {
            item: 4
        },
        1300: {
            items: 5
        },
        1400: {
            items: 6
        },
        1500: {
            items: 8
        }
    }
});

$(".custom-prev-button5").click(function () {
    owl.trigger("prev.owl.carousel");
});

$(".custom-next-button5").click(function () {
    owl.trigger("next.owl.carousel");
});

$(document).ready(function () {
    var owl = $(".owl2.owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Custom button actions
    $(".custom-prev-button").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(".custom-next-button").click(function () {
        owl.trigger("next.owl.carousel");
    });
});



$(document).ready(function () {
    var owl = $(".owl3.owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Custom button actions
    $(".custom-prev-button1").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(".custom-next-button1").click(function () {
        owl.trigger("next.owl.carousel");
    });
});


$(document).ready(function () {
    var owl = $(".owl4.owl-carousel");
    owl.owlCarousel({
        margin: 30,
        loop: true,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $(".custom-prev-button2").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(".custom-next-button2").click(function () {
        owl.trigger("next.owl.carousel");
    });
});


$(document).ready(function () {
    var owl = $(".owl5.owl-carousel");
    owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,

        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000
            },
            500: {
                items: 2,
                autoplay: true,
                autoplayTimeout: 5000
            },
            992: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 5000
            },
            1200: {
                items: 4
            }
        }
    });

    // Custom button actions
    $(".custom-prev-button3").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(".custom-next-button3").click(function () {
        owl.trigger("next.owl.carousel");
    });
});



$(document).ready(function () {
    var owl = $(".owl6.owl-carousel");
    owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Custom button actions
    $(".custom-prev-button4").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(".custom-next-button4").click(function () {
        owl.trigger("next.owl.carousel");
    });
});
