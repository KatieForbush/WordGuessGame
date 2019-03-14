let theWordToGuess = "pizza";
let maxNumberOfGuesses = 10;
let currentNumberOfGuesses = 0;
let usedCharactersEl = document.getElementById('used-characters');
let blanksEl = document.getElementById('blanks');
let attemptedCharacters = [];
let displayCharacters = [];

//initalize successList to 0

for (let i = 0; i < theWordToGuess.length; i++) {
    displayCharacters.push("_");
}
window.onkeypress = function(event) {
    let key = event.key;

    if (!attemptedCharacters.includes(key)) {
        attemptedCharacters.push(key);
    }
    usedCharactersEl.innerHTML = attemptedCharacters.toString();

    currentNumberOfGuesses++;
    if (currentNumberOfGuesses > maxNumberOfGuesses) {
        console.log("YOU LOST");
    }

    for (let i = 0; i < theWordToGuess.length; i++) {
        if (key == theWordToGuess[i]) {
            displayCharacters[i] = theWordToGuess[i];
        }
    }

    blanksEl.innerHTML = displayCharacters.join(' ');

    // if (keys.hasOwnProperty(key)) {
    //     keys[key]--;
    //     if (keys[key] == 0) {
    //         delete keys[key];
    //     }
    // }
    
    if (displayCharacters.join('') == theWordToGuess) {
        alert("THE MAN WAS SET FREE!");
    }
//     if (keys.hasOwnProperty(theWordToGuess))
//     //console.log(keys);   
};
