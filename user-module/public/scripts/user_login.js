$(document).ready(function() {
  $("[name='username']").change(function() {
    if ($("[name='username']").val() && $("[name='password']").val()) {
      $('input.btn').removeAttr('disabled');
    } else if (
      !($("[name='username']").val() && $("[name='password']").val())
    ) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='password']").change(function() {
    if ($("[name='username']").val() && $("[name='password']").val()) {
      $('input.btn').removeAttr('disabled');
    } else if (
      !($("[name='username']").val() && $("[name='password']").val())
    ) {
      $('input.btn').attr('disabled', 'true');
    }
  });
});
