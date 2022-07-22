//returns true if a sentence is a pangram
//and false otherwise.
//a pangram is a sentence that contains every
//letter in the alphabet at least once
function isPangram(string){

    //we want to know if string contains the 
    //every char in the alphabet

    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    //is every letter of the alphabet is included in the string

    var isIncluded = alphabet.split("").every(function(letter){ return string.toLowerCase().includes(letter)});
    return isIncluded;

}