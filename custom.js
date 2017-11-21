$(document).ready(function() {
    
    //change 'Yes' label to 'Next' for processes
    // $('.process-group tspan').text(function(i, oldText) {
    //     return oldText === 'Yes' ? 'Next' : oldText;
    // });


    $('.fc-process').fadeIn("slow", function() {
        $('.fc-process').addClass("faded");
    });

    // $('rect.fc-process').click(function(){
    //     var allRects = $("rect");
    // });

    // $('rect.orange').click(function(){
    //     var allRects = $("rect");
    // });

    // $('rect.orange').click(function(){
    //     $(this).toggleClass('checked').siblings().addClass('fade');
    //     console.log('a rect was clicked');
    // })


    // $("#loader").fadeIn("slow", function() {
    //     $(this).addClass("loader");
    // });


    // $("#loader").fadeOut("slow", function() {
    //     $(this).removeClass("loader");
    // });

                
    //back to top link
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