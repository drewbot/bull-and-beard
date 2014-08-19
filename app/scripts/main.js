

////////////////////////////////////////////////// Way points
$('.second').waypoint(function() {
  console.log('second callback triggered.');
}, { offset: 200 });

$('.third').waypoint(function() {
  console.log('third div.');
}, { offset: 200 });