$(document).ready(function(){

	$(window).scroll(recomputeColumns);
	$(window).resize(recomputeColumns);

	function recomputeColumns() {
		var thumbWidth = $('.thumbnails').first().css('width');
		$('h2.category').css('width', 'thumbWidth');
	};

});

