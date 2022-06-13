/**
 * function takes in string of one or more words,
 * and returns the same string with all of the words 
 * with 5 or more letters reversed.
 */
function spinWords(words){
    /**
     * split the sentence into words and store in an array
     * traverse the array and for every word
     * in the array with a length greater than or equal to 5
     * split the word into characters, reverse the order of the characters
     * and join the charcters back into one string
     * 
     * once this has been completed for every word in the words array,
     * join the array back together again as one string 
     **/
    let wordsArray = words.split(' ');
    for(let i=0; i < wordsArray.length; i++){
        if(wordsArray[i].length >= 5){
            wordsArray[i] = wordsArray[i].split('').reverse().join('');
        }
    }
    return wordsArray.join(' ');
    
}