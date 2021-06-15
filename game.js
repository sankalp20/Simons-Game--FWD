var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
      if (!started) {


        $(".btn").click(function() {

          var userChosenColour = $(this).attr("id");
          userClickedPattern.push(userChosenColour);

          playSound(userChosenColour);

        });

        function nextSequence() {

          level++;

          $("#level-title").text("Level " + level);

          var randomNumber = Math.floor(Math.random() * 4);
          var randomChosenColour = buttonColours[randomNumber];
          gamePattern.push(randomChosenColour);

          $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100);

          document.addEventListener("click",playSound);


        }


        function playSound() {


          var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
          audio.play();
        }

        function animatePress(currentColor) {
          $("#" + currentColor).addClass("pressed");
          setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
          }, 100);
        }
