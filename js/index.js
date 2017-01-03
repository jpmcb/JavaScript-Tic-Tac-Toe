var win = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [3,5,7],
  [1,5,9]
]

var onePlayerGame = {
  selection : null,
  turn: null,
  player: null,
  playerScore : [],
  ai : null,
  aiScore : [],
  
  playerTurn: function () {
    if ($("#" + onePlayerGame.selection).html() !== "x" && 
        $("#" + onePlayerGame.selection).html() !== "o") {
          $("#" + onePlayerGame.selection).html(onePlayerGame.player);
          onePlayerGame.playerScore.push(Number(onePlayerGame.selection));
          onePlayerGame.turn = "ai";
        
          for (var i = 0; i < win.length; i++) {
            if (onePlayerGame.playerScore.sort().indexOf(win[i][0]) != -1 &&
                onePlayerGame.playerScore.sort().indexOf(win[i][1]) != -1 && 
                onePlayerGame.playerScore.sort().indexOf(win[i][2]) != -1) {
              $("#game-board").fadeOut("slow");
              $("#player-turn").fadeOut("slow");
              $("#player-one-wins").delay(500).fadeIn("slow");
          }
        }
           
      onePlayerGame.aiTurn().delay(500);
      } else {
        $("#player-turn").html("I'm sorry, you can't do that, Dave");
        playerTurn;
      }
  },
  
  
  aiTurn : function () {
    console.log("hello world");
  }
}

var twoPlayerGame = {
  selection : null,
  turn: null,
  playerOne: null,
  playerOneScore: [],
  playerTwo: null,
  playerTwoScore: [],
  
  playerOneTurn : function () {
      if ($("#" + twoPlayerGame.selection).html() !== "x" && 
          $("#" + twoPlayerGame.selection).html() !== "o") {
        $("#" + twoPlayerGame.selection).html(twoPlayerGame.playerOne);
        twoPlayerGame.playerOneScore.push(Number(twoPlayerGame.selection));
        twoPlayerGame.turn = "playerTwo";
        
        for (var i = 0; i < win.length; i++) {
            if (twoPlayerGame.playerOneScore.sort().indexOf(win[i][0]) != -1 &&
                twoPlayerGame.playerOneScore.sort().indexOf(win[i][1]) != -1 && 
                twoPlayerGame.playerOneScore.sort().indexOf(win[i][2]) != -1) {
              $("#game-board").fadeOut("slow");
              $("#player-turn").fadeOut("slow");
              $("#player-one-wins").delay(500).fadeIn("slow");
          }
        }
              
      } else {
        $("#player-turn").html("I'm sorry, you can't do that, Dave");
      }
  },
  
  playerTwoTurn : function () {
      if ($("#" + twoPlayerGame.selection).html() !== "x" &&
          $("#" + twoPlayerGame.selection).html() !== "o") {
        $("#" + twoPlayerGame.selection).html(twoPlayerGame.playerTwo);
        twoPlayerGame.playerTwoScore.push(Number(twoPlayerGame.selection));
        twoPlayerGame.turn = "playerOne";
        
        for (var i = 0; i < win.length; i++) {
            if (twoPlayerGame.playerTwoScore.sort().indexOf(win[i][0]) != -1 &&
                twoPlayerGame.playerTwoScore.sort().indexOf(win[i][1]) != -1 && 
                twoPlayerGame.playerTwoScore.sort().indexOf(win[i][2]) != -1) {
              $("#game-board").fadeOut("slow");
              $("#player-turn").fadeOut("slow");
              $("#player-two-wins").delay(500).fadeIn("slow");
          }
        }
        
      } else {
        $("#player-turn").html("I'm sorry, you can't do that, Dave");
      }
  }
}

$("#one-player").click (function () {
  $("#one-player").fadeOut("slow");
  $("#two-player").fadeOut("slow");
  $(".pick-side").delay(400).fadeIn("slow");
  
  $("#choose-x").click(function () {
    onePlayerGame.player = "x";
    onePlayerGame.ai = "o";
    onePlayerGame.turn = "player";
    $(".pick-side").fadeOut("slow");
    $("#game-board").fadeIn("slow");
    $("#player-turn").fadeIn("slow");
  })
  
  $("#choose-o").click(function () {
    onePlayerGame.player = "o";
    onePlayerGame.ai = "x";
    onePlayerGame.turn = "ai";
    $(".pick-side").fadeOut("slow");
    $("#game-board").fadeIn("slow");
    $("#player-turn").html("COMPUTER TURN").fadeIn("slow");
  })

  //run object method to start one player game with AI
})

$("#two-player").click (function () {
  //$("#game-board").fadeIn("slow");
  $("#one-player").fadeOut("slow");
  $("#two-player").fadeOut("slow");
  $(".pick-side").delay(400).fadeIn("slow");
  
  $("#choose-x").click(function () {
    twoPlayerGame.playerOne = "x";
    twoPlayerGame.turn = "playerOne";
    $('#choose-x').fadeOut("slow");
    $("#choose").html("Player 2 is O");
    twoPlayerGame.playerTwo = "o";
    $("#choose-o").fadeOut("slow");
    $("#choose").delay(3000).fadeOut("slow");
    $("#game-board").fadeIn("slow");
    $("#player-turn").fadeIn("slow");
      
  })
  
  $("#choose-o").click(function() {
    twoPlayerGame.playerOne = "o";
    twoPlayerGame.turn = "playerTwo";
    $("#choose-o").fadeOut("slow");
    $("#choose").html("Player 2 is X");
    twoPlayerGame.playerTwo = "x";
    $("#choose-x").fadeOut("slow");
    $("#choose").delay(3000).fadeOut("slow");
    $("#game-board").fadeIn("slow");
    $("#player-turn").html("PLAYER TWO").fadeIn("slow");

    })
  }) 


$(".game-section").click(function () {
  if (twoPlayerGame.turn === "playerOne") {
    twoPlayerGame.selection = $(this).attr('id');
    console.log(twoPlayerGame.selection);
    twoPlayerGame.playerOneTurn();
  } else if (twoPlayerGame.turn === "playerTwo") {
    twoPlayerGame.selection = $(this).attr('id');
    console.log(twoPlayerGame.selection);
    twoPlayerGame.playerTwoTurn();
  } else if (onePlayerGame.turn === "player") {
    onePlayerGame.selection = $(this).attr('id');
    onePlayerGame.playerTurn();
  } else if (onePlayerGame.turn === "ai") {
    onePlayerGame.selection = $(this).attr('id');
    onePlayerGame.AI();
  }
})