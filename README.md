SVGify
======

A small jquery library which allows you to replace images with the corresponding SVG files

Setup
======

Add the reference to the plug-in in the script tag after the jQuery library inclusion:

<code>
`<script src="js/jquery.svgify.js"></script>`
</code>

Usage
======

1. Specify the `data-svgsrc` attribute for the tag which represents an image:
  <code>
    `<img src="..." data-svgsrc="..."/>`
    `<i class="myimage" data-svgsrc="..."></i>`
  </code>
2. Put this code in the `$(document).ready(...)` handler:
  <code>
  	`$(document).ready(function () {`
  		`$('[data-svgsrc]').load(function () {`
  			`var elt = $(this);`
  			`elt`
  			   `.data('w', elt.width())`
  			   `.data('h', elt.height())`
  			   `.svgify();`
  		`});`
  	`});`
  </code>
3. ???
4. Profit!
