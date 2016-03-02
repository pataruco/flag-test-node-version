$(document).ready(function(){
  var flags = {},
      randomFlagNumber,
      flag = {};

  $(window).on('load', getFlags);

  function getFlags() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url:'/flags'
    })
    .success(function(data){
      flags = data;
      console.log(flags);
      renderFlag();
      // renderWhereInTheWorld();
      })
  };

  function randomFlag(){
    randomFlagNumber = Math.floor(Math.random()*196);
    return flag = flags[randomFlagNumber];
  };

  function renderFlag() {
    randomFlag();
    $('#render-flag')
      .append('<h1>' + flag.name + '</h1>')
      .append('<img src="' + flag.url + '" alt="'+ flag.name +'"/>')
      .append('<a href="#" id="good-flag">Good Flag ✔</a>')
      .append('<a href="#" id="bad-flag">Bad Flag ✘</a>')
  };

  $('#where').on('click', renderWhereInTheWorld);

  function renderWhereInTheWorld () {
    var map = "https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+flag.name;
    $('#render-where')
      .append('<iframe src="'+ map +'" width= 100% height= 100% frameborder="0" style="border:0" allowfullscreen> </iframe>');
  }
}); //end document
