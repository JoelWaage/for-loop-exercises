var countTo = '';
var countBy = '';
var numberOutput = []


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    countTo = $("input#countTo").val();
    countBy = $("input#countBy").val();
    countTo = parseInt(countTo);
    countBy = parseInt(countBy);

    for (var i=0; i <= countTo; i += countBy) {
        // return i;
        $("#numberList").append("<p>" + i + "</p>");
    }

    // $("#numberList").append("<p>" + i + "</p>");
    // console.log(numberOutput)

    // event.preventDefault();
  });
});
