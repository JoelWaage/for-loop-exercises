var countTo = '';
var countBy = '';
var numberOutput = []

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    countTo = $("input#countTo").val();
    countBy = $("input#countBy").val();
    countTo = parseInt(countTo);
    countBy = parseInt(countBy);

    for (var index=0; index <= countTo; index += countBy) {
        numberOutput.push(index);
    }

    $("#numberList").append(numberOutput);
    console.log(numberOutput)

    event.preventDefault();
  });
});
