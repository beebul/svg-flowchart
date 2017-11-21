$(document).ready(function() {

    //legend clicks
    $('.background').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus, .fc-finish").not('.orange').toggleClass('faded');
    });

    $('.meeting').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus, .fc-finish").not('.pink').toggleClass('faded');
    });
    $('.meetingResults').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus, .fc-finish").not('.yellow').toggleClass('faded');
    });
    $('.decision').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-finish").not('.fc-rhombus').toggleClass('faded');
    });
    $('.outcomes').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus, .fc-finish").not('.green').toggleClass('faded');
    });
    $('.formalEnquiry').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus, .fc-finish").not('.lightblue').toggleClass('faded');
    });
    $('.finalStep').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
        $(".fc-process, .fc-rhombus").not('.fc-finish').toggleClass('faded');
    });

    $('.clearAll').click(function(){
        $(".fc-process, .fc-rhombus, .fc-finish").removeClass('faded');
    });
                
    //back to top
    if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        });
	}

});