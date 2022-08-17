/**
 *A vaild isbn number is a 10-digit number
 * where the sum of its digits multiplied by their
 * position in the number modulo 11 == 0
 * 
 * if X is a digit in the isbn number then its value is 10
 */


 /**
  * 
  * @param {Number} isbn : This is the number to be validated
  * @return {Boolean} : Is this a valid isbn number
  */
 function isbnValidate(isbn){
    //make isbn into an array of numbers
    const numberString = isbn.toString();
    if(numberString.length != 10){
        return false;
    }
    var numberArr = Array.from(numberString); // each element is a string at this point
    
    
    for(let i = 0 ; i < numberArr.length; i++){
        if(i != numberArr.length-1 && numberArr[i].toUpperCase() == 'X'){
            return false;
        }
        else if(numberArr[numberArr.length-1].toUpperCase() == 'X'){
            numberArr[i] = 10;
        }
        else{
            numberArr[i] = parseInt(numberArr[i]);
        }
        // if(numberArr[numberArr.length-1].toUpperCase() == 'X'){
        //     
        // }
        // else{
        //     
        // }
    }

    //calculate sum of numbers multiplied by their position
    var sum = 0;
    for(let j = 0; j < numberArr.length; j++){
        sum += (numberArr[j] * (j+1));
    }
    //if that value modulo 11 === 0
    return sum % 11 === 0;
 }

console.log(isbnValidate('1293000000'));
console.log(isbnValidate('ABCDEFGHIJ'));
console.log(isbnValidate('XXXXXXXXXX'));