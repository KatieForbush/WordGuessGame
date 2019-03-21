let wordBank = ["worm", "apple", "bunny"];
let theWordToGuess = wordBank[Math.floor(Math.random()*wordBank.length)];
let maxNumberOfGuesses = 10;
let currentNumberOfGuesses = 0;
let usedCharactersEl = document.getElementById('used-characters');
let blanksEl = document.getElementById('blanks');
let attemptedCharacters = [];
let displayCharacters = [];

//initalize successList to 0
window.onload = function() {
    
for (let i = 0; i < theWordToGuess.length; i++) {
    displayCharacters.push("_");
}
blanksEl.innerHTML = displayCharacters.join(' ');

window.onkeypress = function(event) {
    let key = event.key;

    if (!attemptedCharacters.includes(key)) {
        attemptedCharacters.push(key);
    }
    usedCharactersEl.innerHTML = attemptedCharacters.join(",");

    currentNumberOfGuesses++;
    if (currentNumberOfGuesses > maxNumberOfGuesses) {
        alert("YOU LOST");
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
}