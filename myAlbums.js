$(document).ready(function(){

//haha this works
$('section.home1').html(part1a+insert1a+part1b+insert1b+part1c+insert1c+part1d+part2a+insert2a+part2b+insert2b+part2c+insert2c+part2d);
//---------------------- functioning literal code ------------------------------------------------------
//------------------------------------------------------------------------------------------------------

$('body').on('click','a.arc', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.architecture);
});

$('body').on('click','a.forest', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.forest);
});

$('body').on('click','a.night', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.night);
});

$('body').on('click','a.path', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.path);
});

$('body').on('click','a.wall', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.wall);
});

$('body').on('click','a.wide', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  home02(photos.wide);
});



$('#arcBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.architecture);
});

$('#forestBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.forest);
});

$('#nightBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.night);
});

$('#pathBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.path);
});

$('#wallBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.wall);
});

$('#wideBtn').on('click', function(event) {
  // event.preventDefault();
  home02(photos.wide);
});



$('body').on('click','.butts', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');

});


$('.photoView').on('click', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');

});


function home02(album){

    var lookingForLove = "";

    function rowingThree(photo){
      lookingForLove += "<div class='row03'>";
      for (i=0;i<3;i++){
        lookingForLove += "<a href='#' class='butts' rel='photoView'><div class='cookie'><div class='cutter'><img src='"
        +photo[i]+ "'/></div></div></a>";
      }
      return lookingForLove;

    };

    rowingThree(album);
    lookingForLove += "</div>";
//-----------------------------------------second row------------------------>
    var inAllTheWrongPlaces = "";

    function rowingFour(photo){
      inAllTheWrongPlaces += "<div class='row04'>";
      for (i=3;i<6;i++){
        inAllTheWrongPlaces += "<a href='#' class='butts' rel='photoView'><div class='cookie'><div class='cutter'><img src='"
        +photo[i]+"'/></div></div></a>";
      }
      return inAllTheWrongPlaces;
    };

    rowingFour(album);
    inAllTheWrongPlaces += "</div>";

    $('section.home2').html(lookingForLove+inAllTheWrongPlaces);

    };



});
