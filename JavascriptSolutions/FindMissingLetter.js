/**
 * This function takes an array of 
 * consecutive characters with exactly one
 * letter missing and returns the missing letter
 * 
 */

function findMissingLetter(array){
    
    for(let i=0; i < array.length; i++){
        if(array[i].charCodeAt(0) != (array[i+1].charCodeAt(0) - 1)){
            let missing = array[i].charCodeAt(0) + 1;
            return String.fromCharCode(missing);
        }
    }
}

console.log(findMissingLetter(["a","b","c","d","f"]));