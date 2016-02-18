$(document).ready(function() {
  $("form#destination").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var budget = $('#budget option:selected').val();
    var climate = $('#climate option:selected').val();
    var distance = $('#distance option:selected').val();

    if (age >= 40 && climate === 'hot') {
      $("#vacationDestination").empty().append('go swimming in Hawaii');

  } else if (age >=40 && climate === 'cold') {
      $("#vacationDestination").empty().append('Iceland');

  } else if (age <= 10) {
      $("#vacationDestination").empty().append('Chuck E Cheese');

  } else if (age >10 && age < 20 && distance === 'closeBy') {
      $("#vacationDestination").empty().append('Palm Springs');

  } else if (age < 40 && budget === 'expensive') {
      $("#vacationDestination").empty().append('New York City');

  } else if (age < 40 && distance === 'farAway') {
      $("#vacationDestination").empty().append('Thailand');

  } else if (age < 40) {
      $("#vacationDestination").empty().append('Las Vegas');

  } else {
      $("#vacationDestination").empty().append('Portland');
    }

    $("#userName").empty().append(name);
    $("#answer").show();

    event.preventDefault();
  });
});
