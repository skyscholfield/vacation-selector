$(document).ready(function (){
  $("form#vacation-selector").submit(function(){
  event.preventDefault();
  var name = ($("#person1").val());
  var answer1 = ($("#question1").val());
  var answer2 = ($("#question2").val());
  var answer3 = ($("#question3").val());
  var result = (answer1 + answer2 + answer3);
  console.log(name);

  $(".nameoutput").text(name);


  if (result === "aaa" || result === "aab" || result === "aac" || result === "aba" || result === "aca" || result === "baa" || result === "caa"){
    $("#Beaches").slideDown();
  } else if (result === "bbb" || result === "bba" || result === "bbc" || result === "bab" || result === "bcb" || result === "abb" || result === "cbb"){
    $("#Mountains").slideDown();
  } else if (result === "ccc" || result === "ccb" || result === "cca" || result === "cbc" || result === "cac" || result === "bcc" || result === "acc"){
    $("#Jungles").slideDown();
  } else {
    $("#nothing-selected").slideDown();
  }
  });
});
