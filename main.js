$(document).ready(function(){

$('.myAlbums').siblings('div').addClass('inactive');

var loadPg = $('section').find('a');
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

// $('.photoView').on('click', function(event) {
//   event.preventDefault();
//   var selected = "." + $(this).attr('rel');
//   $(selected).removeClass('inactive');
//   $(selected).siblings('div').addClass('inactive');
//
// });

});
