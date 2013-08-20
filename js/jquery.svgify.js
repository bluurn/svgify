(function ($) {
	$.fn.svgify = function () {

		$(this).each(function () {
			
			var elt = $(this);

 			if (!elt.has('data-svgsrc')) {
				return;
			}
			var 
				svgsrc = elt.data('svgsrc'),
				w = elt.data('w'),
				h = elt.data('h');

			if (elt.is('img')) {
				elt
				   .attr('src', svgsrc)
				 .css({
					width: w,
					height: h
				   })
				   .removeAttr('data-svgsrc');

			} else if(elt.children().length > 0) {

				elt.html('<img/>')
						  .find('img')
						  .attr('src', svgsrc)
						   .css({
							width: w,
							height: h
						   })
						   .removeAttr('data-svgsrc');
						  
			}
		});

		return this;
	};
})(jQuery);
