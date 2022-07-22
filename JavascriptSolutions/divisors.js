/**
 * divisors is a function that takes an integer
 * and returns a list of that numbers divisors
 * with the exception of 1 and the number n itself
 * If a number is prime we return the string "n is a prime number"
 * with n being whatever value was passed into our function
 * 
 */

/**
 * we know that, when finding divisors of a number,
 * no divisor will ever be greater than n/2.
 * If we search exhaustively through each potential 
 * divisor up to n/2 we will get all posible positive divisors of n
 * 
 */
function divisors(n){
    var result = [];
    
    for(let i=2; i <= Math.floor(n/2); i++){
      if(n % i === 0){
        result.push(i);
      }
    }
    if(result.length == 0){
      return `${n} is prime`;
    }
    return result;
}