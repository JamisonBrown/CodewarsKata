/**
 * solution to isPalindrome
 */

/**
 * Brute force:
 * 
 * compute halfway point
 * if seq is odd numbered one pointer at mid -1 and one at mid + 1
 * else pointer at mid - 1 and mid + 2 
 * if these values are not the same return false 
 * otherwise continue
 */


// function isPalindrome(seq){
//     var mid = Math.floor(seq.length/2);
//     if(seq.length == 2){
//        return seq[0] == seq[1];
//     }
//     if(seq.length % 2 != 0){
//         let i=mid - 1;
//         let j = mid + 1;

//         for(i; i >= 0 ; i--){
//             for(j; j < seq.length; j++){
//                 if(seq[i] != seq[j]){
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
//     else{
//         let i = mid -1;
//         let j = mid + 2;

//         for(i; i >= 0; i--){
//             for(j; j < seq.length; j++){
//                 if(seq[i] != seq[j]){
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
// }


/** 
 * better solution to isPalindrome:
 * 
 *  Base cases: 
 *  [a] 1 element: isPalindrome => true
 *  [aa] 2 elements: isPalindrome if a[0] == a[1]
 * 
 *  General Cases:
 *  [aba] could remove indicies 0 and 2 and be left with a palindrome
 *  [abba] could remove indiceis 0 and 3 and be left with a palindrome
 *      
 *  a sequence is a palindrome if:
 *      given a sequence of n characters : seq
 *      removing the first and last characters will still yeild a palindrome
 * 
 *  isPalindrome(seq, start, end)
 *      if seq.length == 1 
 *          return true
 *      else if(seq.length == 2){
 *          return seq[start] == seq[end]
 *      }
 *      else{
 *          return isPalindrome(seq, start + 1, end-1)
 *      }
 */

function isPalindrome(seq){
    if(seq.length == 0 || seq.length == 1){
        return true;
    }
    return seq[0] == seq[seq.length-1] && isPalindrome(seq.slice(1,-1));
}

 console.log(isPalindrome(['a'], 0,0)); // true
 console.log(isPalindrome(['a', 'b'], 0,1)); //false
 console.log(isPalindrome(['a', 'b', 'a'], 0, 2)); //true
// console.log(isPalindrome("aba")); //true
// console.log(isPalindrome("abba"));//true
