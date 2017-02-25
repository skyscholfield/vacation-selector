$(document).ready(function (){
  $("form#vacation-selector").submit(function(){
  event.preventDefault();
  var answer1 = parseInt($("#question1").val());
  var answer2 = parseInt($("#question2").val());
  var answer3 = parseInt($("#question3").val());
  var answer4 = parseInt($("#question4").val());
  var result = parseInt(answer1 + answer2 + answer3 + answer4);
  console.log(result);

  if (result <= 4){
    $("#nothing-selected").slideDown();
  } else if (result >= 5 && result <=8){
    $("#Beaches").slideDown();
  } else if (result >= 9 && result <= 12){
    $("#Mountains").slideDown();
  } else if (results >= 13 && result <= 16){
    $("#Jungles").slideDown();
  } else if (results >= 13 && result <= 16){
    $("#Deserts").slideDown();
  }


  });
});
