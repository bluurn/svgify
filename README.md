SVGify
======

A small jquery library which allows you to replace images with the corresponding SVG files

Setup
======

Add the reference to the plug-in in the script tag after the jQuery library inclusion:

`<script src="js/jquery.svgify.js"></script>`

Usage
======

* Specify the `data-svgsrc` attribute for the tag which represents an image:

```
    <img src="..." data-svgsrc="..."/>
    <i class="img" data-svgsrc="..."></i>
```
* Put this code in the `$(document).ready(...)` handler:

```
$(document).ready(function () {
	$(document).ready(function () {
		$('img[data-svgsrc]').load(function () {
			var elt = $(this);
			elt
			   .data('w', elt.width())
			   .data('h', elt.height())
			   .svgify();
		});
		var 
			nonImgElt = $('.img[data-svgsrc]'),
			w = nonImgElt.width();
			h = nonImgElt.height();
		nonImgElt
			.data('w', w)
			.data('h', h)
			.svgify();
	});

});
```

