
var ventana_alto = $(window).height();

$("#indepth_juanes").css("height",ventana_alto+"px");


$(document).ready(function() {
    $('#indepth_juanes').fullpage({
	    menu: true,
	    scrollOverflow: true
    });
});


window.onload = function() {
	<!--  selecciono la clase javascript -->
    var javascript = document.querySelector('.mexico');
    new EasyPieChart(javascript, {
			<!-- activo la animación y establezco su duración a un segundo -->
			animate: ({ duration: 1000, enabled: true }),
			<!-- aumento la longitud de las lineas de la gráfica -->
			scaleLength:0,
			<!-- aumento el tamaño de la gráfica -->
			size:150,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 7,
			rotate:0,
			<!-- añado el número del porcentaje que se muestra en el span -->
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	var html5 = document.querySelector('.usa');
    new EasyPieChart(html5, {
			animate: ({ duration: 2000, enabled: true }),
			scaleLength:0,
			size:150,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 6,
			rotate:0,
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	var css = document.querySelector('.mundo');
    new EasyPieChart(css, {
			animate: ({ duration: 3000, enabled: true }),
			scaleLength:0,
			size:150,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 5,
			rotate:0,
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	}

/*$('#indepth_juanes').onepage_scroll({
	 loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"
});*/