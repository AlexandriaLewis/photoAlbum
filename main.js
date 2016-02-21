$(document).ready(function(){

$('.myAlbums').siblings('div').addClass('inactive');

var loadPg = $('.row').find('a');
loadPg.click(function(event){
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');

});

var home = $('.coreBtns').find('a');
home.click(function(event){
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');

});

// var album = $('.photoView').find('a');
// album.click(function(event){
//   event.preventDefault();
//   var selected = "." + $(this).attr('rel');
//   $(selected).removeClass('inactive');
//   $(selected).siblings('div').addClass('inactive');
// });



});
