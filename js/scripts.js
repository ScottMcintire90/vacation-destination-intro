$(document).ready(function() {
  $("form#destination").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var budget = $('#budget option:selected').val();
    var climate = $('#climate option:selected').val();
    var distance = $('#distance option:selected').val();

    if (age >= 40 && climate === 'hot') {
      $("#vacationDestination").empty().append('go swimming in Hawaii','<br>','<img src="img/hawaii.jpg" style="width:625px;height:417px">');

  } else if (age >=40 && climate === 'cold') {
      $("#vacationDestination").empty().append('flew over to Iceland','<br>','<img src="img/iceland.jpg">');

  } else if (age <= 10) {
      $("#vacationDestination").empty().append('played some video games at Chuck E Cheese','<br>','<img src="img/chuck.jpg" style="width:625px;height:417px">');

  } else if (age > 30 && age < 40) {
          $("#vacationDestination").empty().append('gambled away your life savings in Las Vegas','<br>','<img src="img/vegas.jpg" style="width:625px;height:417px">')

  } else if (age >10 && age < 20 && distance === 'closeBy') {
      $("#vacationDestination").empty().append('soaked up some sun in Palm Springs','<br>','<img src="img/palm.jpg" style="width:625px;height:417px">');

  } else if (age < 40 && budget === 'expensive') {
      $("#vacationDestination").empty().append('saw a broadway play in New York City','<br>','<img src="img/nyc.jpg" style="width:625px;height:417px">');

  } else if (age < 40 && distance === 'farAway') {
      $("#vacationDestination").empty().append('relaxed on a beach in Thailand','<br>','<img src="img/thailand.jpg" style="width:625px;height:417px">');
  } else {
      $("#vacationDestination").empty().append('got a Voodoo donut in Portland','<br>','<img src="img/portland.jpg" style="width:625px;height:417px">');
    }

    $("#userName").empty().append(name);
    $("#answer").show();

    event.preventDefault();
  });
});
