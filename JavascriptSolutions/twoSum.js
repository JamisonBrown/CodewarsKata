/**
 * takes a list/array of numbers and a target number
 * 
 * the list of numbers contains 2 numbers that add to make the 
 * target, return the indicies of these two numbers as an array of size 2
 */


//function takes nummber array and target number as inputs
function twoSum(numbers, target){
//search the array for 2 numbers that add together to make the target
    //start at the beginning of the array; while not at the end of the array; increment by 1 at the end of loop
    for(let i=0; i < numbers.length-1; i++){
        //have another pointer tracking comparisions made
        for(let j=i+1; j < numbers.length; j++){
            //if the sum of the two numbers at these indicies are equal to the sum return their indexes
            if(numbers[i] + numbers[j] == target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum([1,2,3,4], 5));