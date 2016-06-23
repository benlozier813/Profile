// Waits for HTML to fully load

$(document).ready(function() {

// Placeholder for turns in click function

var turnKeeper = 0;

// Creates array that mirrors the tictactoe board

var tableArray = [
    0, 0, 0,
    0, 0, 0,
    0, 0 ,0
];

// Updates scoreboard

var player1score = 0
var player2score = 0
$("#player1score").text(player1score)
$("#player2score").text(player2score)

// Randomly chooses 0 or 1

var randomNum = Math.floor(Math.random()*2);

// Updating the scoreboard for X winning combinations, animates the score, and changing the player name color (green: win, red: lose)

function scoreKeeper(){
  if (randomNum === 0){
    player1score += 1;
  $("#player1score").text(player1score);
  $("#player1score").animate({"font-size": "40pt"});
  $("#player1").css("color", "#27e833");
  $("#player2").css("color", "#fb122f");
  } else{
    player2score += 1
    $("#player2score").text(player2score);
    $("#player2score").animate({"font-size": "40pt"});
    $("#player2").css("color", "#27e833");
    $("#player1").css("color", "#fb122f");
  };
};
// Updating the scoreboard for O winning combinations, animates the score, and changing the player name color (green: win, red: lose)

function scoreKeeper2(){
  if (randomNum === 1){
  player1score += 1;
  $("#player1score").text(player1score);
  $("#player1score").animate({"font-size": "40pt"});
  $("#player1").css("color", "#27e833");
  $("#player2").css("color", "#fb122f");
  } else{
    player2score += 1
    $("#player2score").text(player2score);
    $("#player2score").animate({"font-size": "40pt"});
    $("#player2").css("color", "#27e833");
    $("#player1").css("color", "#fb122f");
  };
};

//Setting the CSS to show which player goes first based off of our original random number (0 = Player 1 goes first, 1 = Player 2 goes first)

function whoseTurn(){
  if (randomNum === 0){
    $("#leftCol").css("background-color", "#527fa9").css("box-shadow", "inset 0 0 30px 15px #49628a");
    $("#player1").css("color", "white")
    $("#rightCol").css("background-color", "white").css("box-shadow", "inset 0 0 0 0 white");
    $("#player2").css("color", "black")
  } else {
      $("#rightCol").css("background-color", "#527fa9").css("box-shadow", "inset 0 0 30px 15px #49628a");
      $("#player2").css("color", "white");
      $("#leftCol").css("background-color", "white").css("box-shadow", "inset 0 0 0 0 white");
      $("#player1").css("color", "black")
  }
}

  /* When start button is clicked: both input boxes are hidden, the player names' text size increases,
  a player is randomly chosen to go first (name is highlighted), and start button is hidden.
  It also shows our New Game and Reset button */

    $("#startButton").click(function() {
      $("#p1textbox").hide();
      $("#p2textbox").hide();
      $(".square").text("");
      $("h2").animate({"font-size":"62px"});
        if (randomNum === 0){
          $("#leftCol").css("background-color", "#527fa9").css("color", "white").css("box-shadow", "inset 0 0 30px 15px #49628a");
        } else {
          $("#rightCol").css("background-color", "#527fa9").css("color", "white").css("box-shadow", "inset 0 0 30px 15px #49628a");
        }
      $("#startButton").hide();
    });

function clickStop(square){
  if($(square).text() === ""){$(square).text(" ")}
}

function clickStopAll(){
  clickStop("#0");
  clickStop("#1");
  clickStop("#2");
  clickStop("#3");
  clickStop("#4");
  clickStop("#5");
  clickStop("#6");
  clickStop("#7");
  clickStop("#8");
}


/* Adds x to game upon clicking a square, checks conditions (if value of the square is empty),
and adds 1 into the correct index of our tableArray. We are also checking winning combinations of x squares from the array.
 It also checks for a tie. Once someone wins, it resets our array and turnkeeper. Runs scorekeeper function. */

  var xoClicker;
  function clickSquare(square) {
    function sumElements(array, index0,index1,index2) {
      return index0+index1+index2;
    }
    $(square).click(function() {
    if (turnKeeper % 2 === 0 && $(square).text() === "" && turnKeeper < 9) {
      xoClicker = $(square).text("X");
      tableArray[parseInt($(square).attr("id"))] = 1;
      if(sumElements(tableArray, tableArray[0], tableArray[1], tableArray[2]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();

      }
      if(sumElements(tableArray, tableArray[3], tableArray[4], tableArray[5]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[6], tableArray[7], tableArray[8]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[0], tableArray[3], tableArray[6]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[1], tableArray[4], tableArray[7]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[2], tableArray[5], tableArray[8]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[2], tableArray[4], tableArray[6]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[0], tableArray[4], tableArray[8]) === 3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      } else {
        if(turnKeeper === 8 || turnKeeper === 9){
          $("#board").css({ opacity: 0.5 });
         tableArray = [0,0,0,0,0,0,0,0,0];
         turnKeeper = -1;
         $("#player1").css("color", "#FFBE00");
         $("#player2").css("color", "#FFBE00");
         $("#newGameButton").show();
         $("#resetButton").show();
       }
      }
      turnKeeper++;

    }
    // Same as above but for O's.

    if (turnKeeper % 2 === 1 && $(square).text() === "") {
      xoClicker = $(square).text("O");
      tableArray[parseInt($(square).attr("id"))] = -1;
      if(sumElements(tableArray, tableArray[0], tableArray[1], tableArray[2]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[3], tableArray[4], tableArray[5]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[6], tableArray[7], tableArray[8]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[0], tableArray[3], tableArray[6]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[1], tableArray[4], tableArray[7]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[2], tableArray[5], tableArray[8]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[2], tableArray[4], tableArray[6]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      if(sumElements(tableArray, tableArray[0], tableArray[4], tableArray[8]) === -3){
        $("#board").css({ opacity: 0.5 });
        tableArray = [0,0,0,0,0,0,0,0,0];
        turnKeeper = -1;
        scoreKeeper2();
        $("#newGameButton").show();
        $("#resetButton").show();
        clickStopAll();
      }
      turnKeeper++;
    }
  })
  };

// Makes all squares clickable

  clickSquare("#0");
  clickSquare("#1");
  clickSquare("#2");
  clickSquare("#3");
  clickSquare("#4");
  clickSquare("#5");
  clickSquare("#6");
  clickSquare("#7");
  clickSquare("#8");


// Clears textbox when clicked

  $("#p1textbox").click(function () {
    $("#p1textbox").val("");
  });
  $("#p2textbox").click(function () {
    $("#p2textbox").val("");
  });

// Binds enter Key to submit input in player one textbox and replaces the player 1 heading with submitted text

  $("#p1textbox").bind("enterKey", function(e) {
    var p1name = $("#p1textbox").val();
      $("#player1").text(p1name);
  });

// When enter is hit, checks if both player names have changed. If so, start button is shown.

  $('#p1textbox').keyup(function(e){
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    var p1name = $("#player1").text();
    var p2name = $("#player2").text();
    if (p1name != "Player 1" && p2name != "Player 2"){
      $("#startButton").show();
      }
      $("#p1textbox").val("");
    };
  });

// When enter is hit, checks if both player names have changed. If so, start button is shown.

  $("#p2textbox").bind("enterKey", function(e) {
    var p2name = $("#p2textbox").val();
    $("#player2").text(p2name);
  });
  $('#p2textbox').keyup(function(e){
    if(e.keyCode == 13) {
      $(this).trigger("enterKey");
    var p1name = $("#player1").text();
    var p2name = $("#player2").text();
    if (p1name != "Player 1" && p2name != "Player 2"){
      $("#startButton").show();
      }
      $("#p2textbox").val("");
    };
  });

/* Resets player score size, changes the random number so we can change the starting player,
runs whose turn function so visiually you can see the new players turn, and resets all the squares to have no text in the html. */

  $("#newGameButton").click(function() {
  $("#board").css({ opacity: 1 });
  $("#player1score").animate({"font-size": "18pt"});
  $("#player2score").animate({"font-size": "18pt"});
    if (randomNum === 0) {
      randomNum += 1;
    }
    else {
      randomNum -= 1;
    };
  whoseTurn();
  $(".square").text("");
  $("#newGameButton").hide();
  $("#resetButton").hide();
  })
});
