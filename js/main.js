$(document).ready(function() {
	$('.colors-selector .colors-item').on('click', function() {
		var	itemImg = $('.item-colors img'),
			imgPath = $(this).attr('data-path');

		itemImg.fadeOut(200, function() {
			$(this).attr('src', imgPath).fadeIn(200);
		});
	});
});