/**
 * romanToInt returns the integer conversion of
 * a given roman numeral String
 * 
 * There is a general rule of roman numerals, that if you read them backwards
 * if (num[i-1] < num[i]) then you can subtract nums[i-1] from the previous number
 */

function romanToInt(roman){
    roman = roman.toUpperCase();
    const romanMap = {I:1, V:5, X:10, L:15, C:100, D:500, M:1000};

    var sum = romanMap[roman.charAt(roman.length-1)]; // start the sum as the last character in the roman string
    
    //traverse the string backwards
    for(let i=roman.length-1; i > 0; i--){ //do no operations on the 0th index because there is no -1 index

        if(romanMap[roman.charAt(i-1)] < romanMap[roman.charAt(i)]){
            sum -= romanMap[roman.charAt(i-1)]; //subtract from the total sum
        }
        else{
            sum += romanMap[roman.charAt(i-1)]; //add to the total sum
        }
    }
    return sum;
}

console.log(romanToInt("IXIX"));
console.log(romanToInt("ixix"));
console.log(romanToInt("xxvii"));
console.log(romanToInt("m"));