$(function (){
	console.log("Jquery is loading!");

$("#elevate-zoom-meg").ezPlus();
$("#elevate-zoom-emma").ezPlus();

$("#elevate-zoom-meg-inner").ezPlus({ 
	zoomType	: "inner", 
	cursor: "crosshair"});
$("#elevate-zoom-emma-inner").ezPlus({ 
	zoomType	: "inner", 
	cursor: "crosshair"});

$('#meg-lens').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200});

$('#emma-lens').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200});


});










