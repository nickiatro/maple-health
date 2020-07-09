$(document).ready(() => {
  $.ajax({
    url: '/update',
    method: 'GET',
    success: res => {
      $('div.container').replaceWith($(res).filter('div.container'));
    },
  });
});
