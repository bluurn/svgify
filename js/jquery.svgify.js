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

			if (elt.prop('tagName') === "IMG") {
				elt
				   .attr('src', svgsrc)
				   .css({
					width: w,
					height: h
				   })
				   .removeAttr('data-svgsrc');

			}

			if(elt.prop('tagName') !== "IMG" && !elt.children().length) {
				var w = elt.width(),
				    h = elt.height()
				elt
				   .css({background: 'none'})
				   .html('<img src="' + svgsrc + '" />')
				   .removeAttr('data-svgsrc');
				elt
				   .find('img')
				   .css({ width: w, height: h });
			}
		});

		return this;
	};
})(jQuery);
