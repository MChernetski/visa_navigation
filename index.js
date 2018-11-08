$(document).ready(function () {

  $('.nav-link').click(
    function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    });

  $('.arrow-pos').click(function(e) {
    var x = e.pageX;
    //var x = e.pageX - e.target.offsetLeft;
    $('.arrow-icon').css({ left: x + "px" , transition: 400 + "ms" });
    $('.arrow-icon').addClass('d-block')
  });
});