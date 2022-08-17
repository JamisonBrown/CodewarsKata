
/**
 * helper function to help get the number of digits in an integer
 * @param {} num 
 * @returns 
 */
function numDigits(num){
    var count = 0;
    var number = num;
    while(number > 0){
        number = Math.floor(number/10);
        count++;
    }
    return count;
}

/**
 * multiply all digits of num together (order doesnt matter in multiplication)
 * while num digits for number is > 1 keep doing multiplication operation on new values of num
 * 
 */

function persistence(num){

    var prevNum = num;
    var count = 0;

    while(numDigits(prevNum) > 1){
        var product = 1;
        var currNum = prevNum;
        while(currNum > 1){
            product *= currNum % 10;
            currNum = Math.floor(currNum/10);
        }
        prevNum = product;
        count ++;
    }
    return count;
}

console.log(numDigits(999));