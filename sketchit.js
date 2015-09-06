$(document).ready(function() {

	function makeGrid(n){
		for (i = 0; i < n; i++) {

			for (j = 0; j < n; j++) {

				square = $('<div class="square"></div>');
				$('#container').append(square);

			}
		}
	};

	makeGrid(16);

	$(document).on('mouseenter', '.square', function() {

		$(this).addClass('hover');

	});
	
	$(document).on('click', '.reset', function() {
		var n = prompt('How many squares per side for your new grid?');
		$('.square').remove();
		makeGrid(n);
		$('.square').height(800 / n - 2);
		$('.square').width(800 / n - 2);
	});
});

