$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 10);

    // Countdown Timer
    var timeleft = 4;
    var downloadTimer = setInterval(function () {
        $("#timer").attr("class", "display-4").text(timeleft);
        $("#message").text("seconds remaining");
        timeleft--;
        if (timeleft < -1) {
            clearInterval(downloadTimer);
            $('#timer').hide();
            $("#message").attr('class', 'display-4').text("Time is over!");
            $(".btn").attr("disabled", true);
        }
    }, 1000);

    // Random question display and check for answer

    $.ajax({
        "type": "GET",
        "url": "questions.json",
        "success": function (response) {
            var quesNumber = randomNumber;
            $("#question").attr("class","my-4").text(response[quesNumber].question);
            $(".btn").on('click', function () {
                if ($('#answer')[0].value.toUpperCase() === response[quesNumber].answer.toUpperCase()) {
                    window.alert('Correct Answer!');
                    $("#timer").hide();
                    $("#message").hide();
                    $("#nextQues").attr("class", "display-4").text("Reload page for new question!");
                } else {
                    window.alert('Wrong Answer');
                    $("#timer").hide();
                    $("#message").hide();
                    $("#nextQues").attr("class", "display-4").text("Reload page for new question!");
                }
            })
        }
    });

    
});