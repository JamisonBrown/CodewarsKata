
/**
 * The function printerError(s)
 * takes a string argument that consists of 
 * letters a-z.
 * 
 * A valid string of characters will only contain 
 * letters a-m. we want to know the rate at which an
 * incorrect letter is produced.
 * 
 * Ex: if the string has 14 letters and 2 of the letters
 * are correct we have an error rate of 2/14. DO NOT REDUCE THE FRACTION!!!
 * 
 * @param {*} s string of letters
 */

function printerError(s){
    const regEx = /[a-m]/; //the use of regular expressions makes string processing much easier
    var numError = 0; //number of errors found
        s = s.split(''); // turn our input string into an array of its characters
        for(let i=0; i < s.length; i++){//process each letter in the array
            if(!s[i].match(regEx)){//letter doesn't match
                numError++; //add to errors found
            }
        }//after each letter has been processed
    return `${numError}/${s.length}`;
}
