$(document).ready(function() {
    

	$('.fc-start').click(function() {
	    //location.reload();
	    //fix up the items not disappearing
	});

    //change 'Yes' label to 'Next' for processes
    $('.process-group tspan').text(function(i, oldText) {
        return oldText === 'Yes' ? 'Next' : oldText;
    });

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