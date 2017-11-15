$(document).ready(function() {
    

	$('.fc-start').click(function() {
	    //location.reload();
	    //fix up the items not disappearing
	});

    //change 'Yes' label to 'Next' for processes
    $('.process-group tspan').text(function(i, oldText) {
        return oldText === 'Yes' ? 'Next' : oldText;
    });

});