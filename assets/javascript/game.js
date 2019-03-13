window.onload = function () {

var word ;              // Selected word
var guess ;             // Geuss
var geusses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word

//<input type="text" onkeypress="myFunction()"></input>
}

// Show lives
comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
var words = ["galaxy", "heart", "coffee", "travel"];
function secretWord()
    return secretWord[Math.floor(math.random()*words.length]

//<input type="test" onkeypress="letterPressed"></input>

function letterPressed(){
    //if letter pressed is correct then put it on the screen and put it in the already used area
    var letter = (" ")
    //if (letter = true);

}
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



 