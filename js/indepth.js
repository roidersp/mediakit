
var ventana_alto = $(window).height();

$("#indepth_juanes").css("height",ventana_alto+"px");


$(document).ready(function() {
    $('#indepth_juanes').fullpage({
	    menu: true,
	    scrollOverflow: true
    });
});


/*$('#indepth_juanes').onepage_scroll({
	 loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"
});*/