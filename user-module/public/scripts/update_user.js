$(document).ready(() => {
  $.ajax({
    url: '/update',
    method: 'GET',
    success: res => {
      document.write(res);
    },
  });
});
