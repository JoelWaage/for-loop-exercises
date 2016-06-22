var palInput = '';
var palLetters = [];

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    palInput = $("input#palInput").val();
    palLetters = palInput.split("");
    var palReverse = palLetters.slice().reverse();
    var inputReverse = palReverse.join("");

    if (palInput === inputReverse) {
      $("#output").val("It's a Palindrome!");
    } else {
        $("#output").val("It's Not a Palindrome!");
    }




  });
});
