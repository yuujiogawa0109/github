$(function() {
  var i = 1;
  setInterval(function() {
    if(i > 4) i = 1;
    $(".title").css("background","url('img"+i+".jpg')");
    i++;
    }, 4000
  );
});
