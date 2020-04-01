//THIS ONE CRYSTALS

//like hangman...(word guess game)
//goal is to match user's total score to the random number
//comp generates random number between 19 & 120
//there are 3 crystals, each one generates a diff value (consistently, respectively) between 1 & 12
//when reach number, "your total score is" scorebox reflects a zero (resets to zero)
//when user matches random number, "win" gains one
//when user goes over random number, "losses" gains one
//when user clicks on crystal, that crystal's respective value is added to the value of the random number
$(document).ready(function () {
    // function crystal () {

    //create random number executor
    // function randomNum(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min)); 
    var targetNumber = Math.floor((Math.random() * 120) + 19);

    $("#target-number").text(targetNumber)

    var crystalOne = Math.floor((Math.random() * 12) + 1)
    var crystalTwo = Math.floor((Math.random() * 12) + 1)
    var crystalThree = Math.floor((Math.random() * 12) + 1)

    var wins = 0;
    var losses = 0;
    var gemTotal = 0;

    // randomNum(19, 120);

    //create vars for 3 crystals, each with a diff value between 1 & 12
    // var crystalOne = 3
    // var crystalTwo = 8
    // var crystalThree = 1

    //if user clicks on crystalOne, 3 is added to randomNum
    $(".crystalOne").on("click", function () {
        gemTotal = gemTotal + crystalOne;
        console.log(gemTotal);

        if (gemTotal === targetNumber) {
            win();

        } else if (targetNumber < gemTotal) {
            loss();
        }
    });

    function win() {
        wins++;
        alert("You win!");
        $("#wins").text("Wins:" + wins);
        reset();
    }

    function loss() {
        losses++;
        alert("YOu lose!");
        $("#losses").text("Losses:" + losses);
        reset();
    }

    function reset() {
        targetNumber = Math.floor((Math.random() * 120) + 19);
        console.log(targetNumber);
        $("#target-number").text(targetNumber)
        gemTotal = 0;
    }

    $(".crystalTwo").on("click", function () {
        gemTotal = gemTotal + crystalTwo;
        console.log(gemTotal);

        if (gemTotal === targetNumber) {
            win();

        } else if (targetNumber < gemTotal) {
            loss();
        }
    });


    $(".crystalThree").on("click", function () {
        gemTotal = gemTotal + crystalThree;
        console.log(gemTotal);

        if (gemTotal === targetNumber) {
            win();

        } else if (targetNumber < gemTotal) {
            loss();
        }

    });

    //if user clicks on crystalTwo, 8 is added to randomNum
    // $(".crystalTwo").click(function() {
    //     gemTotal = gemTotal + crystalTwo
    // });

    // //if user clicks on crystalOne, 1 is added to randomNum
    // $(".crystalThree").on("click", function() {
    //     gemTotal + crystalThree
    // });

    // }

    // crystal()
    // console.log(crystal);

    // Creating variables to hold the number of wins & losses. They start at 0.



    // This logic reflects the outcome of the game (win/loss/tie), and increments the appropriate number
    // if (userGuess === computerGuess) {
    //     wins++
    //   }
    //   if (userGuess !== computerGuess) {
    //     losses = losses + 1
    //   }
});