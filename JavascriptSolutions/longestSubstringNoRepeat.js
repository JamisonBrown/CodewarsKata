/**
 * 
 * The idea behind this code is to use hash maps to keep track of seen substrings.
 * 
 * Obviously if any string is less than two, the longest substring is equal to the length of that substring.
 * However, if not, then we would have to consider another approach.
 * As we transverse the string, we put a character into the hash table if it's not already in there where the 
 * key is the character and the value is the index. --> hash = {char: index}
 * 
 * If there character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. 
As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.
 */

// var lengthOfLongestSubstring = function(s) {
//     let max_len = 0;
//     let curr = 0;
//     let hash = {}; //create a hash map. This one is empty but when it is filled it will have [key:value] pairs
//     if(s.length < 2) { // if the string has less than two characters then it is already sorted by definition
//         return s.length;
//     }
//     for(let i = 0; i < s.length;  i++) { //we want to process every character in the string
//         if(hash[s[i]] == null) { //if that character is not in our hash table object
//             curr += 1; // increment our curr value
//         } else {//character exists within hash table
//             curr = Math.min(i - hash[s[i]], curr + 1); 
//             //set curr equal to the min (the current index minus the value stored at the matching key in the
//                 // hash table, and curr + 1
//         }
//         max_len = Math.max(max_len, curr); 
//         hash[s[i]] = i; //save the index
//     }
//     return max_len;
// };

function lengthOfLongestSubstring(s){

    let max_len = 0; //final longest substring length
    let curr_len = 0; //length of current non-repeating substring
    let hashTable = {}; //track characters found and the last index they were seen key[value]

    //any string less than size 2 is trivially non-repeating and the longest substring
    if(s.length < 2){
        return s.length;
    }
    
    // process each character in the string one at a time
    for(let i=0; i < s.length; i++){
        //if the current character is not in the hash table
        if(hashTable[s[i]] == null){ //key value pair does not exist within table
            curr_len += 1; //this is a unique char so we can update curr_len of the current substring 
        }
        //if the current character is not in the hash table
        else{
            //the length of the non-repeating substring to this point
            // depends on the distance between the index of this occurrence and the previous one
            // if we are at index i then hashTable[s[i]] should return the last occuring index of s[i];
            curr_len = Math.min(i - hashTable[s[i]], curr_len+1);
        }
        //update the max-length
        max_len = Math.max(max_len, curr_len);
        hashTable[s[i]] = i;
    }
    return max_len;

}

console.log(lengthOfLongestSubstring("abcabb"));