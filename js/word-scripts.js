$(document).ready(function() {

  var wordInput = '';
  var vowels = ["a", "e", "i", "o", "u"];
  
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var output = [];
    wordInput = $("input#wordInput").val();
    var splitWordInput = wordInput.split("");

    splitWordInput.forEach(function(element) {
      var result = $.inArray(element, vowels);
      if (result >= 0) {
        output.push("-");
      } else {
        output.push(element);
      }
    });
    var finalResult = output.join("");
    $("#output").val(finalResult);
  });
});
