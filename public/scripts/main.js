//Extend Animation CSS to jQuery

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//nav on small screen

$(document).ready(function(){
  var menuIcon = $('#menu-icon');

  menuIcon.on('click', showNav);

  function showNav () {
    $('nav ul').slideToggle('slow');
  };
});//end document
