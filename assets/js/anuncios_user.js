
(function($) {

	function mainInit() {
		$body = $('body');
		// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9)
			$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on mobile.
		skel.on('+mobile -mobile', function() {
			$.prioritize(
				'.important\\28 mobile\\29',
				skel.breakpoint('mobile').active
			);
		});

		// Scrolly links.
		$('.scrolly').scrolly();

		// Nav.
		var $nav_a = $('#nav a');

		// Scrolly-fy links.
		$nav_a
			.scrolly()
			.on('click', function(e) {

				var t = $(this),
					href = t.attr('href');

				if (href[0] != '#')
					return;

				e.preventDefault();

				// Clear active and lock scrollzer until scrolling has stopped
				$nav_a
					.removeClass('active')
					.addClass('scrollzer-locked');

				// Set this link to active
				t.addClass('active');

			});

		// Initialize scrollzer.
		var ids = [];

		$nav_a.each(function() {

			var href = $(this).attr('href');

			if (href[0] != '#')
				return;

			ids.push(href.substring(1));

		});

		$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

		// Toggle.
		$(
			'<div id="headerToggle">' +
				'<a href="#header" class="toggle"></a>' +
			'</div>'
		)
			.appendTo($body);

		// Header.
		$('#header')
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left',
				target: $body,
				visibleClass: 'header-visible'
			});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
			$('#headerToggle, #header, #main')
				.css('transition', 'none');

	    setTableAnun();
	}

	mainInit();

	function setTableAnun() {
		var c1 = "auto",
			c2 = "auto",
			c3 = "auto",
			c4 = "auto";

		var w = $(".container").width();

		if(w > 600){
			c1 = parseInt( 0.2 * w );
			c2 = parseInt( 0.2 * w );
			c3 = parseInt( 0.4 * w );
			c4 = parseInt( 0.2 * w );
		}

		var jsGridParams = {
            width: "100%",
            sorting: true,
            paging: true,
            editing:false,
            autoload: true,
            pageSize: 10,
            pageButtonCount: 5,
            updateOnResize: true,
            noDataContent: "Ningún dato encontrado.",
            controller: dbAnun,

            pagerFormat: "Pag {first} {prev} {pages} {next} {last}    {pageIndex} de {pageCount}",
            pagePrevText: " < ",
		    pageNextText: " > ",
		    pageFirstText: " << ",
		    pageLastText: " >> ",

            fields: [
             	{ name: "Profesor", type: "text", align: "center", width: c1 },
             	{ name: "Titulo", type: "text", align: "center", width: c2 },
	            { name: "Contenido", type: "textarea", align: "center", width: c3 },
	            { name: "Fecha", type: "text", align: "center", width: c4 },
            	{ type: "control" }
            ]
        };

		$( window ).resize(function() {
			w = $(".container").width();

			if(w > 600){
				jsGridParams.fields[0].width = parseInt( 0.2 * w );
				jsGridParams.fields[1].width = parseInt( 0.2 * w );
				jsGridParams.fields[2].width = parseInt( 0.4 * w );
				jsGridParams.fields[3].width = parseInt( 0.2 * w );

			}
			else{
				jsGridParams.fields[0].width = "auto";
				jsGridParams.fields[1].width = "auto";
				jsGridParams.fields[2].width = "auto";
				jsGridParams.fields[3].width = "auto";
			}

			$("#jsGrid").jsGrid("destroy");
			$("#jsGrid").jsGrid(jsGridParams);
		});

		$("#jsGrid").jsGrid(jsGridParams);
	}

})(jQuery);