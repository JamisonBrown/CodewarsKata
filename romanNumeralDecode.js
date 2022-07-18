/*
This function takes a roman numeral string and returns its 
integer equivalent. 
Ex: II -> 2

The string will always be correct so do not check string for proper format

Roman numberal Conversions
I: 1
V: 5
X: 10
L: 50
C: 100
D: 500
M: 1,000
*/

function solution(roman){
    //create a map to hold our roman numerals and values
    var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    var numbers = roman.toUpperCase().split('');
    var sum = 0;

    for(let i=0; i < numbers.length; i++){
        if(data[numbers[i]] < data[numbers[i+1]]){
            sum += data[numbers[i+1]] - data[numbers[i]];
            i++;
        }
        else{
            sum+= data[numbers[i]];
        }
    }
    return sum;
}

console.log(solution('iV'));