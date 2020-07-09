function isEmpty() {
  if (
    $("[name='username']").val() &&
    $("[name='password']").val() &&
    $("[name='first_name']").val() &&
    $("[name='last_name']").val() &&
    $("[name='email']").val() &&
    $("[name='street']").val() &&
    $("[name='city']").val() &&
    $("[name='postal_code']").val()
  ) {
    return false;
  } else return true;
}

function isValidEmail() {
  if (
    $("[name='email']")
      .val()
      .match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)
  ) {
    return true;
  } else return false;
}

function isValidPostalCode() {
  if (
    $("[name='postal_code']")
      .val()
      .match(/[A-Z]\d[A-Z]\s\d[A-Z]\d/)
  ) {
    return true;
  } else return false;
}

function isValid() {
  return !isEmpty() && isValidEmail() && isValidPostalCode();
}

function addInputValidation() {
  if (isValid()) {
    $('input.btn').removeAttr('disabled');
  }
  $("[name='username']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='password']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='first_name']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='last_name']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='email']").change(function() {
    if (isValid() && isValidEmail()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='street']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='city']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='province']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
  $("[name='postal_code']").change(function() {
    if (isValid()) {
      $('input.btn').removeAttr('disabled');
    } else if (!isValid()) {
      $('input.btn').attr('disabled', 'true');
    }
  });
}

$(document).ready(() => {
  $.ajax({
    url: $(location).attr('href'),
    method: 'GET',
    success: res => {
      $('div.container').replaceWith($(res).filter('div.container'));
      addInputValidation();
    },
  });
});
