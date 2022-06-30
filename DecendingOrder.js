/**
 * Takes a non-negative integer as an argument and return it
 * with its digits in decending order
 *  Reagranges the digits to create the highest possible number
 */

function decendingOrder(n){
   number = n.toString();
   number = number.split("");
   number = number.sort();
   number = number.reverse();
   return Number(number.join(""));   
}


console.log(decendingOrder(12432));//43221