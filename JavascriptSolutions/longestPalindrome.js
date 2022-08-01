/**
 * this function takes a string argument and returns the longest palidromic substring of that string
 * 
 * a palindrome is a string that can be read the same way forwards and backwards.
 * 
 *  In fact, we could solve it in O(n^2)O(n) time using only constant space.
    
    We observe that a palindrome mirrors around its center.
    Therefore, a palindrome can be expanded from its center, and there are only 2n−1 such centers.
    
    You might be asking why there are 2n−1 but not n centers? 
    The reason is the center of a palindrome can be in between two letters. 
    Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.
 */

function longestPalindrome(s){
    //if the string is null or has a 0 length 
    // there is no longest palindrome.
    if(s == null || s.length < 1){
        return "";
    }
    //else
    let start = 0; let end = 0;
    for(let i=0; i < s.length; i++){
        let length1 = expandAroundCenter(s,i,i); //check first n center possibilities
        let length2 = expandAroundCenter(s,i,i+1); //check next n-1 center possibilities were there are 2 matching chars in the center

        let max_length = Math.max(length1,length2);//the largest substring found, will be stored here
        
        if(max_length > end - start){
            start = i - (max_length - 1)/2;
            end = i + max_length / 2;
        }
    }
    return s.substring(start, end+1);
}

/**
 * Helper function to handle the action of expanding outward
 * checking for equal characters on either side of the center
 * @param {*} s 
 * @param {*} left 
 * @param {*} right 
 */
function expandAroundCenter(str, left, right){
    let L=left; let R=right;//pointers to numbers on the left and right side of the center

    //while we havent reached the end boundaries of our string
    // and the characters are equal
    while(L >= 0 && R < str.length && str.charAt(L) == str.charAt(R)){
        L--; //decrement L
                /**checking for bigger palindromic substring */
        R++; //increment R
    }
    //exit the while loop if the condition is not met
    return R - L - 1; //return the size of the substring found
    //R - L - 1 = size of the substring zero base
}

console.log(longestPalindrome("aabbababc"));