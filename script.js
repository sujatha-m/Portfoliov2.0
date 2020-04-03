function copyEmail(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fontdiv").click(function () {
  $(".collapse").collapse("hide");
});

// $(".case").live('click', function(){
//     $.fancybox({
//         openEffect: 'elastic',
//         closeEffect: 'elastic'
//     });
