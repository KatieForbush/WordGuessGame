window.onload = function () {

var word ;              // Selected word
var guess ;             // Geuss
var guesses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word

//array of secret words
var words = ["galaxy", "heart", "coffee", "travel"];

function secretWord(){
    return secretWord[Math.floor(math.random()*words.length)];
}
function letterPressed(){
    //if letter pressed is correct then put it on the screen and put it in the already used area
    var letter = (" ")
    //if (letter = true);

}

//<input type="text" onkeypress="myFunction()"></input>
}

// Show lives
comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


//<input type="test" onkeypress="letterPressed"></input>


//console.log(words)
//var word = words[Math.floor(Math.random() * words.length)];

//var answerArray = [];
//for (var i = 0; i < word.length; i++) {
//answerArray[i] = "_";
//}


// Reset

//document.getElementById('reset').onclick = function() {
    //correct.parentNode.removeChild(correct);
    //letters.parentNode.removeChild(letters);
    //showClue.innerHTML = "";
    //context.clearRect(0, 0, 400, 400);
    //play();
  //}



 