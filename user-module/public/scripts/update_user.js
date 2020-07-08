$(document).ready(function() {
  $.ajax({
    url: '/update',
    success: res => {
      $('div.container').html($(res).filter('div.container'));
    },
  });
});
