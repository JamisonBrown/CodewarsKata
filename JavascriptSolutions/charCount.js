
/**
 * The function count takes a string value
 * "string" and returns the number of occurences for 
 * each character
 * 
 * @param {string} string string of characters to be read
 * 
 */
function count(string){
    
    //keep track of the characters in the string
    const countMap = new Map();
    const initCount = 0;

    //iterate over the string using a for loop
    for(let i=0; i < string.length; i++){
        
        if(!countMap.has(string[i])){
            //put it in the map and set its count to 1
            countMap.set(string[i], initCount+1);
        }
        else{//if the character is in the map
            //find its key within the map and increment its value
            countMap.set(string[i], countMap.get(string[i]) + 1);
        }
    }
    return countMap;
}

console.log(count("aba"));