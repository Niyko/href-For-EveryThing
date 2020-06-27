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
			$(this).unbind('click');
			$(this).click(function (event) {
				event.stopPropagation();
				redirectTo($(this).attr('href'));
			});
		}
	});
}

function redirectTo(url){
	window.location.href = url;
}

$('body').bind("DOMSubtreeModified", function () {
	hrefForEveryThing();
});
