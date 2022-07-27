

//contain the chars of string1 and string2 separately and with their occurences
function count(string1){
    
    //keep track of the characters in the string
    const str1Map = new Map();
    const initCount = 0;

    //iterate over the string using a for loop
    for(let i=0; i < string1.length; i++){
        
        if(!str1Map.has(string1[i])){
            //put it in the map and set its count to 1
            str1Map.set(string1[i], initCount+1);
        }
        else{//if the character is in the map
            //find its key within the map and increment its value
            str1Map.set(string1[i], str1Map.get(string1[i]) + 1);
        }
    }
    return str1Map;
}

/**
 * This function takes a pair of strings containing only lowercase letters
 * 
 * We want to return true if string 1 can be rearranged to make string 2
 * and false otherwise
 * 
 * We know one string can be rearranged into another if it has a greater or equal 
 * number of characters and a greater than or equal number of occurences of that character
 * 
 */
function scramble(str1, str2){
    const str1Chars = count(str1);
    const str2Chars = count(str2);
    if(str1Chars.size < str2Chars.size){
        return false;
    }
    //traverse the second map
    for(const entry of str2Chars){//the entry will be an array with 2 indicies [(0)key,(1)value]
        if(str1Chars.has(entry[0])){ //if str1 has the same entry 
            //if str1's character does not have at least the same number of occurances as the entry
            if(str1Chars.get(entry[0]) < entry[1]){
                return false;
            }
            // else continue
        }
        else{ //entry is not in str1
            return false;
        }
    }
    return true;
}

console.log(scramble("thatisamatch", "thismatch"));