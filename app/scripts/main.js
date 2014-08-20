

////////////////////////////////////////////////// Way points

////////////////////////////////////////////////// Second div
$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').addClass('box-two-move');
  		console.log('second div down 80%');
	} else {
		$('.box-two').removeClass('box-two-move');
  		console.log('second div up 80%');
	}
}, { offset: '80%' });

$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').removeClass('box-two-move');
  		console.log('second div down 20%');
	} else {
		$('.box-two').addClass('box-two-move');
  		console.log('second div up 20%');
	}
}, { offset: '20%' });


////////////////////////////////////////////////// Third div
$('.third').waypoint(function() {
  console.log('third div.');
}, { offset: '90%' });