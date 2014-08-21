

////////////////////////////////////////////////// Way points

////////////////////////////////////////////////// Second div
$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').addClass('box-two-move');
	} else {
		$('.box-two').removeClass('box-two-move');
	}
}, { offset: '50%' });

$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').removeClass('box-two-move');
	} else {
		$('.box-two').addClass('box-two-move');
	}
}, { offset: '0%' });


////////////////////////////////////////////////// Third div
$('.third').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-three').addClass('box-two-move');
	} else {
		$('.box-three').removeClass('box-two-move');
	}
}, { offset: '50%' });

$('.third').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-three').removeClass('box-two-move');
	} else {
		$('.box-three').addClass('box-two-move');
	}
}, { offset: '0%' });
