
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const user1Input = $("input#user1").val().toUpperCase();
    const verb1Input = $("input#verb1").val();
    const verb2Input= $("input#verb2").val();
    const adjectiveInput = $("input#adjective").val();
    const noun1Input = $("input#noun1").val();
    const noun2Input = $("input#noun2").val().toUpperCase();
    const numberInput = $("input#number").val();
    const locationInput = $("input#location").val();
    const user2Input = $("input#user2").val();


    $(".user1").text(user1Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".adjective").text(adjectiveInput);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".number").text(numberInput);
    $(".location").text(locationInput);
    $(".user2").text(user2Input);

    $("#letter").show();
    $(this).hide();
    event.preventDefault();
  });
});