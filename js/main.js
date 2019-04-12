$(document).ready(function() {
	$('.model-color').on('click', function() {
		var	itemImg = $('.model-photo img'),
			imgPath = $(this).attr('data-path');

		itemImg.fadeOut(200, function() {
			$(this).attr('src', imgPath).fadeIn(200);
		});
	});
});