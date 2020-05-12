$(function() {
	hrefForEveryThing();
	$('body').bind("DOMSubtreeModified", function () {
		hrefForEveryThing();
	});
});

function hrefForEveryThing(){
	$("[href]").each(function (index) {
		if (!$(this).is("a")) {
			$(this).css('cursor', 'pointer');
			$(this).click(function (event) {
				event.stopPropagation();
				window.location.href = $(this).attr('href');
			});
		}
	});
}

$('body').bind("DOMSubtreeModified", function () {
	hrefForEveryThing();
});