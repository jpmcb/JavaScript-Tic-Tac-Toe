// by jpmcb, message me with questions! Have fun!

//the winning scores
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

//one player game object
var onePlayerGame = {
  selection : null,
  turn: null,
  player: null,
  playerScore : [],
  ai : null,
  aiScore : [],
  aiGameOver : 0,
  
    
  //the human players turn
  playerTurn: function () {
    
    if ($("#" + onePlayerGame.selection).html() !== "x" && 
        $("#" + onePlayerGame.selection).html() !== "o") {
          $("#" + onePlayerGame.selection).html(onePlayerGame.player);
          onePlayerGame.playerScore.push(Number(onePlayerGame.selection));
          onePlayerGame.turn = "ai";
          $("#player-turn").fadeOut(300);
          window.setTimeout(function () {
              $("#player-turn").html("Hmmm, let me think").fadeIn(300);
            }, 400);
        
          for (var i = 0; i < win.length; i++) {
            if (onePlayerGame.playerScore.sort().indexOf(win[i][0]) != -1 &&
                onePlayerGame.playerScore.sort().indexOf(win[i][1]) != -1 && 
                onePlayerGame.playerScore.sort().indexOf(win[i][2]) != -1) {
              window.setTimeout(function () {
                $("#game-board").fadeOut("slow");
                $("#player-turn").fadeOut(400);
                $("#player-one-wins").html("You won!").delay(500).fadeIn("slow");
                $("#credits").delay(500).fadeIn("slow");
            }, 600)
          }
        }
           
      window.setTimeout(onePlayerGame.aiTurn, 1500);
      } else {
        $("#player-turn").fadeOut(300);
        window.setTimeout(function () {
          $("#player-turn").html("I'm sorry, you can't do that, Dave").fadeIn(300);
        }, 400)
      }
  },
  
  // the AI computers turn, several functions to make AI smarter
  aiTurn : function () {
    function whoWon () {
      for (var i = 0; i < win.length; i++) {
            if (onePlayerGame.aiScore.sort().indexOf(win[i][0]) != -1 &&
                onePlayerGame.aiScore.sort().indexOf(win[i][1]) != -1 && 
                onePlayerGame.aiScore.sort().indexOf(win[i][2]) != -1) {
              window.setTimeout(function () {
                $("#game-board").fadeOut("slow");
                $("#player-turn").fadeOut(400);
                $("#computer-wins").delay(500).fadeIn("slow");
                $("#credits").delay(500).fadeIn("slow");
            }, 600)
        }
      }
    }
    
    if ($("#1").html() === onePlayerGame.player && 
        $("#2").html() === onePlayerGame.player &&
        $("#3").html() !== onePlayerGame.ai) {
          $("#3").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(3);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#1").html() === onePlayerGame.player && 
        $("#3").html() === onePlayerGame.player &&
        $("#2").html() !== onePlayerGame.ai) {
          $("#2").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(2);
          onePlayerGame.turn = "player";
          whoWon();
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#2").html() === onePlayerGame.player && 
        $("#3").html() === onePlayerGame.player &&
        $("#1").html() !== onePlayerGame.ai) {
          $("#1").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(1);
          onePlayerGame.turn = "player";
          whoWon(); 
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#4").html() === onePlayerGame.player && 
        $("#5").html() === onePlayerGame.player &&
        $("#6").html() !== onePlayerGame.ai) {
          $("#6").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(6);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#5").html() === onePlayerGame.player && 
        $("#6").html() === onePlayerGame.player &&
        $("#4").html() !== onePlayerGame.ai) {
          $("#4").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(4);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#4").html() === onePlayerGame.player && 
        $("#6").html() === onePlayerGame.player &&
        $("#5").html() !== onePlayerGame.ai) {
          $("#5").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(5);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#7").html() === onePlayerGame.player && 
        $("#8").html() === onePlayerGame.player &&
        $("#9").html() !== onePlayerGame.ai) {
          $("#9").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(9);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#8").html() === onePlayerGame.player && 
        $("#9").html() === onePlayerGame.player &&
        $("#7").html() !== onePlayerGame.ai) {
          $("#7").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(7);
          onePlayerGame.turn = "player";
          whoWon();      
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    if ($("#7").html() === onePlayerGame.player && 
        $("#9").html() === onePlayerGame.player &&
        $("#8").html() !== onePlayerGame.ai) {
          $("#8").delay(500).html(onePlayerGame.ai);
          onePlayerGame.aiScore.push(8);
          onePlayerGame.turn = "player";
          whoWon();     
          $("#player-turn").fadeOut(300);
          if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
    }
    
    // AI picks a random square
    var randomSection = Math.floor(Math.random() * 9) + 1;
    if (onePlayerGame.turn === "ai") {
      if ($("#" + randomSection).html() != "x" &&
          $("#" + randomSection).html() != "o") {
            $("#" + randomSection).html(onePlayerGame.ai);
            onePlayerGame.aiScore.push(randomSection)
            whoWon();
            onePlayerGame.turn = "player";
            console.log($("#player-one-wins").css("display"));
            $("#player-turn").fadeOut(300);
            if ($("#player-one-wins").css("display") === "none") {
              window.setTimeout(function () {
                $("#player-turn").html("It's your turn").fadeIn(300);
              }, 400); 
            }
        
      } else if (onePlayerGame.aiGameOver > 200) {
        $("#game-board").fadeOut("slow");
        $("#player-turn").fadeOut("slow");
        $("#computer-wins").delay(500).html("Game Over, no one wins").fadeIn("slow");
        
      } else {
        onePlayerGame.aiTurn();
        onePlayerGame.aiGameOver++;
      }
    }
  }
}


// two player game object
var twoPlayerGame = {
  selection : null,
  turn: null,
  playerOne: null,
  playerOneScore: [],
  playerTwo: null,
  playerTwoScore: [],
  
    
  //player one's turn object method
  playerOneTurn : function () {
      if ($("#" + twoPlayerGame.selection).html() !== "x" && 
          $("#" + twoPlayerGame.selection).html() !== "o") {
        $("#" + twoPlayerGame.selection).html(twoPlayerGame.playerOne);
        twoPlayerGame.playerOneScore.push(Number(twoPlayerGame.selection));
        twoPlayerGame.turn = "playerTwo";
        $("#player-turn").fadeOut(300);
        window.setTimeout(function () {
          $("#player-turn").html("It's Player two's turn").fadeIn(300);
        }, 400);
        
        
        for (var i = 0; i < win.length; i++) {
            if (twoPlayerGame.playerOneScore.sort().indexOf(win[i][0]) != -1 &&
                twoPlayerGame.playerOneScore.sort().indexOf(win[i][1]) != -1 && 
                twoPlayerGame.playerOneScore.sort().indexOf(win[i][2]) != -1) {
              window.setTimeout(function () {
                $("#game-board").fadeOut("slow");
                $("#player-turn").fadeOut(400);
                $("#player-two-wins").delay(500).fadeIn("slow");
                $("#credits").delay(500).fadeIn("slow");
            }, 600)
          } 
        }
              
      } else {
        $("#player-turn").fadeOut(300);
        window.setTimeout(function () {
          $("#player-turn").html("I'm sorry, you can't do that, Dave").fadeIn(300);
        }, 400)
      }
  },
  
    
  //player twos turn object method
  playerTwoTurn : function () {
      if ($("#" + twoPlayerGame.selection).html() !== "x" &&
          $("#" + twoPlayerGame.selection).html() !== "o") {
        $("#" + twoPlayerGame.selection).html(twoPlayerGame.playerTwo);
        twoPlayerGame.playerTwoScore.push(Number(twoPlayerGame.selection));
        twoPlayerGame.turn = "playerOne";
        $("#player-turn").fadeOut(300);
        window.setTimeout(function () {
          $("#player-turn").html("Now it's Player One's turn").fadeIn(300);
        }, 400)
        
        for (var i = 0; i < win.length; i++) {
            if (twoPlayerGame.playerTwoScore.sort().indexOf(win[i][0]) != -1 &&
                twoPlayerGame.playerTwoScore.sort().indexOf(win[i][1]) != -1 && 
                twoPlayerGame.playerTwoScore.sort().indexOf(win[i][2]) != -1) {
              window.setTimeout(function () {
                $("#game-board").fadeOut("slow");
                $("#player-turn").fadeOut(400);
                $("#player-two-wins").delay(500).fadeIn("slow");
                $("#credits").delay(500).fadeIn("slow");
            }, 600)
          }
        }
        
      } else {
        $("#player-turn").fadeOut(300);
        window.setTimeout(function () {
          $("#player-turn").html("I'm sorry, you can't do that, Dave").fadeIn(300);
        }, 400)
      }
  }
}



////// SET UP FUNCTIONS //////

$("#one-player").click (function () {
  $("#one-player").fadeOut("slow");
  $("#two-player").fadeOut("slow");
  $("#credits").fadeOut("slow");
  $(".pick-side").delay(500).fadeIn("slow");
  
  $("#choose-x").click(function () {
    onePlayerGame.player = "x";
    onePlayerGame.ai = "o";
    onePlayerGame.turn = "player";
    $(".pick-side").fadeOut("slow");
    $("#game-board").delay(500).fadeIn("slow");
    $("#player-turn").delay(500).fadeIn("slow");
  })
  
  $("#choose-o").click(function () {
    onePlayerGame.player = "o";
    onePlayerGame.ai = "x";
    onePlayerGame.turn = "ai";
    $(".pick-side").fadeOut("slow");
    $("#game-board").delay(500).fadeIn("slow");
    $("#player-turn").html("I picked, go ahead").delay(800).fadeIn("slow");
    // call the AI's turn automatically, x always goes first
    onePlayerGame.aiTurn();
  })
})

$("#two-player").click (function () {
  $("#one-player").fadeOut("slow");
  $("#two-player").fadeOut("slow");
  $("#credits").fadeOut("slow");
  $(".pick-side").delay(500).fadeIn("slow");
  
  $("#choose-x").click(function () {
    twoPlayerGame.playerOne = "x";
    twoPlayerGame.turn = "playerOne";
    $('#choose-x').fadeOut("slow");
    $("#choose").html("Player 2 is O");
    twoPlayerGame.playerTwo = "o";
    $("#choose-o").fadeOut("slow");
    $("#choose").delay(900).fadeOut("slow");
    $("#game-board").delay(1500).fadeIn(500);
    $("#player-turn").html("Player One's Turn").delay(1500).fadeIn("slow");
      
  })
  
  $("#choose-o").click(function() {
    twoPlayerGame.playerOne = "o";
    twoPlayerGame.turn = "playerTwo";
    $("#choose-o").fadeOut("slow");
    $("#choose").html("Player 2 is X");
    twoPlayerGame.playerTwo = "x";
    $("#choose-x").fadeOut("slow");
    $("#choose").delay(1000).fadeOut("slow");
    $("#game-board").delay(700).fadeIn(500);
    $("#player-turn").html("Player two's turn").delay(1500).fadeIn("slow");

    })
  }) 

//call methods on click
$(".game-section").click(function () {
  if (twoPlayerGame.turn === "playerOne") {
    twoPlayerGame.selection = $(this).attr('id');
    twoPlayerGame.playerOneTurn();
  } else if (twoPlayerGame.turn === "playerTwo") {
    twoPlayerGame.selection = $(this).attr('id');
    twoPlayerGame.playerTwoTurn();
  } else if (onePlayerGame.turn === "player") {
    onePlayerGame.selection = $(this).attr('id');
    onePlayerGame.playerTurn();
  } 
})

$("#reset").click(function () {
  window.location.reload(false);
})