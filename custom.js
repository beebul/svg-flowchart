$(document).ready(function() {

    // //legend clicks
    $('.clearAll').click(function() {
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded orange peach pink yellow green lightblue aqua purple');
    });

    $('.background').click(function() {
        console.log('background');
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
                    shape.removeClass("faded peach pink yellow green lightblue aqua");
                    shape.addClass("orange");
                }
            }
        })
    });

    $('.studentRequired').click(function() {
        console.log('studentRequired');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('studentRequired') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded orange pink yellow green lightblue aqua");
                    shape.addClass("peach");
                }
            }
        })
    });

    $('.decisionRequired').click(function() {
        console.log('decisionRequired');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('decisionRequired') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded peach orange pink yellow green lightblue aqua");
                    shape.addClass("purple");
                }
            }
        })
    });

    $('.communication').click(function() {
        console.log('communication');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('communication') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded orange peach pink green lightblue aqua purple");
                    shape.addClass("yellow");
                }
            }
        })
    });

    $('.aioStep').click(function() {
        console.log('aioStep');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('aioStep') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded orange peach pink yellow lightblue aqua purple");
                    shape.addClass("green");
                }
            }
        })
    });

    $('.hosStep').click(function() {
        console.log('hosStep');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('hosStep') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded orange peach pink yellow green aqua purple");
                    shape.addClass("lightblue");
                }
            }
        })
    });

    $('.outcome').click(function() {
        console.log('outcome');
        $(".fc-process, .fc-rhombus, .fc-finish").addClass("faded");
        shapes.map(function(node) {
            var parent = $('#' + node.id);
            var shape = $(parent.children()[0]);
            if (node.category) {
                if (node.category.indexOf('outcome') < 0) {
                    // fade this shape
                    shape.addClass("faded");
                } else {
                    shape.removeClass("faded orange peach pink yellow green lightblue purple");
                    shape.addClass("aqua");
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