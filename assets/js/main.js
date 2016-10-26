
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

		$modal = $('#practInfoModal');
		$modal.modal({
			show:false
		});

	    $("#jsGrid").jsGrid({
                width: "100%",
                filtering: true,
                sorting: true,
                paging: true,
                editting: true,
                autoload: true,
                pageSize: 5,
                pageButtonCount: 5,
                noDataContent: "Ningún dato encontrado.",
                controller: db,

                rowClick: function(obj) {
                	$modal.off('shown.bs.modal');
                	var item = obj.item;

                	$labelState = $modal.find(".labelState");

                	if(item.Estado){
	                	$labelState.removeClass('label-danger');
                		$labelState.addClass("label").addClass('label-success');
                		$labelState.text('Entregado');
                	}
                	else{
	                	$labelState.removeClass('label-success');
                		$labelState.addClass("label").addClass('label-danger');
                		$labelState.text('Pendiente');
                	}

                	$modal.find('.modal-title').text(item.Practica);

            		$modal.modal('show');
            		$modal.on('shown.bs.modal', function (e) {
						console.log(item);
					});
                },

                pagerFormat: "Pag {first} {prev} {pages} {next} {last}    {pageIndex} de {pageCount}",
                pagePrevText: " < ",
			    pageNextText: " > ",
			    pageFirstText: " << ",
			    pageLastText: " >> ",

                fields: [
                 	{ name: "Practica", type: "text", align: "center", width: 250, title: "Práctica" },
		            { name: "Unidad", type: "text", align: "center", width: 150 },
		            { name: "Estado", type: "checkbox", align: "center", width: 100 },
		            { name: "Fecha", type: "text", align: "center", width: 100 },
	            	{ type: "control" }
                ]
            });

	    $('input[name="daterange"]').daterangepicker();
	}

	mainInit();

})(jQuery);