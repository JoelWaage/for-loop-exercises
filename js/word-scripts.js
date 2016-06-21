$(document).ready(function() {
  var userInput = "";
  var vowels = "a, e, i, o, u"
  $("#blanks form").submit(function(event) {
    userInput = $("input#wordInput").val();

    for (var index=; index <= countTo; index += countBy) {
        .push(index);
    }

  alert(userInput);

  event.preventDefault();
  });
});
