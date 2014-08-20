

////////////////////////////////////////////////// Way points
$('.second').waypoint(function() {
  $('.box-two').addClass('box-two-move');
  console.log('second div.');
}, { offset: '80%' });

$('.second').waypoint(function() {
  $('.box-two').removeClass('box-two-move');
  console.log('second div.');
}, { offset: '20%' });

$('.third').waypoint(function() {
  console.log('third div.');
}, { offset: '90%' });