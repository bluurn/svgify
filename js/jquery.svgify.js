(function ($) {
	$.fn.svgify = function () {

		$(this).each(function () {
			var elt = $(this);

			if (elt.is('img') && elt.has('data-svgsrc')) {
				var svgsrc = elt.data('svgsrc');
				elt.attr('src', svgsrc);
				elt.removeAttr('data-svgsrc');
			}
		});

		return this;
	};
})(jQuery);
