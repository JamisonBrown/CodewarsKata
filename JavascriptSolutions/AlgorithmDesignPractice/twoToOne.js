
/**
 * 
 */
function getUnique(string1, string2){
    var hash = new Map();

    for(let i=0; i < string1.length ; i++){
        if(!hash.has(string1.charAt(i))){
            hash.set(string1.charAt(i), string1.charAt(i));
        }
    }

    for(let j=0; j < string2.length; j++){
        if(!hash.has(string2.charAt(j))){
            hash.set(string2.charAt(j), string2.charAt(j));
        }
    }
    return hash; //this will be the longest unsorted string between the two
} //filling the  hashtable should take O(n+m) where n is the size of string1 and m is the size of string2

function longestSortedString(string1, string2){
    longestUnsorted = getUnique(string1, string2); //O(n+m)

    //traverse longestUnsorted and read contents into an array
    let charArray = Array.from(longestUnsorted);

    charArray.sort(); //sorts the array in ascending order O(log(n))

    let result = [];

    for(let i =0; i < charArray.length; i++){ //O(x) where x is the size of the hash table
        result.push(charArray[i][0]);
    }

    return result.join('');
}


let a= "xyaabbbccccdefww";
let b= "xxxxyyyyabklmopq";
//console.log(getUnique(a,b));

console.log(longestSortedString(a,b));