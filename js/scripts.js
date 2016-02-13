$(document).ready(function() {
  $("form#destination").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());

    if (age >= 30) {
    vacation = "Hawaii";
    $("#vacationDestination").empty().append(vacation);
  }

    $("#userName").empty().append(name);
    $("#answer").show();

    event.preventDefault();
  });
});
