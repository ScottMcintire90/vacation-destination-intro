$(document).ready(function() {
  $("form#destination").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var budget = $('#budget option:selected').val();

    if (age >= 30) {
      $("#vacationDestination").empty().append("Hawaii");

  } else if (budget == "cheap") {
    debugger;
      $("#vacationDestination").empty().append("Thailand");

  } else {

      $("#vacationDestination").empty().append("Portland");
    }

    $("#userName").empty().append(name);
    $("#answer").show();

    event.preventDefault();
  });
});
