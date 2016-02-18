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
      $("#vacationDestination").empty().append('flew over the arctic to Iceland');

  } else if (age <= 10) {
      $("#vacationDestination").empty().append('played some video games at Chuck E Cheese');

  } else if (age >10 && age < 20 && distance === 'closeBy') {
      $("#vacationDestination").empty().append('soaked up some sun in Palm Springs');

  } else if (age < 40 && budget === 'expensive') {
      $("#vacationDestination").empty().append('saw a broadway play in New York City');

  } else if (age < 40 && distance === 'farAway') {
      $("#vacationDestination").empty().append('relaxed on a beach in Thailand');

  } else if (age < 40) {
      $("#vacationDestination").empty().append('gambled away your life savings in Las Vegas');

  } else {
      $("#vacationDestination").empty().append('got a Voodoo donut in Portland');
    }

    $("#userName").empty().append(name);
    $("#answer").show();

    event.preventDefault();
  });
});
