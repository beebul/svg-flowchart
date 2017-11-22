$(document).ready(function() {

    // //legend clicks
    $('.clearAll').click(function() {
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
    });

    $('.background').click(function() {
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('background') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    // make this shape orange
                    shape.removeClass("faded");
                    shape.addClass("orange");
                }
            }
        })
    });

    $('.studentRequired').click(function() {
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('studentRequired') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    // make this shape peach
                    shape.removeClass("faded");
                    shape.addClass("peach");
                }
            }
        })
    });


    //back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

});