$(document).ready(function() {

    $("html,body").animate({scrollTop: 0}, 100); //100ms for example

    var previewBody = $('#drawing').minimap();

    $('.my-legend li').click(function() {
        $('.active').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });

    // //legend clicks
    // All colours :
    // faded orange peach pink yellow green lightblue aqua purple

    $('.clearAll').click(function() {
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded orange peach pink yellow green lightblue aqua purple');
        $("#SvgjsG1545 text").attr('fill', '#fff');
        $("#SvgjsG1552 text").attr('fill', '#fff');
        $("#SvgjsG1528 text").attr('fill', '#fff');
        $("#SvgjsG1552 text").attr('fill', '#fff');
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
                    shape.removeClass("faded peach pink yellow green lightblue aqua");
                    shape.addClass("orange");
                }
            }
        })
        $('#drawing').minimap();
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
                    shape.removeClass("faded orange pink yellow green lightblue aqua");
                    shape.addClass("peach");
                }
            }
        })
        $('#drawing').minimap();
    });

    $('.decisionRequired').click(function() {
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
        $('#drawing').minimap();
    });

    $('.communication').click(function() {
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
                    $("#SvgjsG1545 text").attr('fill', '#000');
                    $("#SvgjsG1552 text").attr('fill', '#000');
                    $("#SvgjsG1195 text").attr('fill', '#000');
                    $("#SvgjsG1202 text").attr('fill', '#000');
                }
            }
        })        
        $('#drawing').minimap();
    });

    $('.aioStep').click(function() {
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
        $('#drawing').minimap();
    });

    $('.hosStep').click(function() {
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
                    $("#SvgjsG1528 text").attr('fill', '#000');
                    $("#SvgjsG1552 text").attr('fill', '#000');
                    $("#SvgjsG1178 text").attr('fill', '#000');
                    $("#SvgjsG1202 text").attr('fill', '#000');
                }
            }
        })
        $('#drawing').minimap();
    });

    $('.outcome').click(function() {
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
                    $("#SvgjsG1545 text").attr('fill', '#fff');
                    $("#SvgjsG1528 text").attr('fill', '#fff');
                    $("#SvgjsG1552 text").attr('fill', '#fff');
                    $("#SvgjsG1195 text").attr('fill', '#fff');
                    $("#SvgjsG1178 text").attr('fill', '#fff');
                    $("#SvgjsG1202 text").attr('fill', '#fff');
                }
            }
        })
        $('#drawing').minimap();
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