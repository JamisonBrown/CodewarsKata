/**
 * countBits calculates the number of bits equal to 1
 * in the Bitwise representation of n
 * @param {*} n 
 * @returns count: the number of 1s in the Bitwise representation of n
 */

function countBits(n){
    let count = 0; // variable to keep track of 1s found
    //to calculate number of bits = 1 we divide n by 2
    //and keep the remainder. The remainder is a bit in the BW representaion
    //we do this while n>0
    while(n>0){
        if(n%2 === 1){//for each 1 calculated add 1 to count
            count++;
        }
        n = Math.floor(n/2);//divide n/2 and keep the floor so that we keep working with integers
    }
    return count;
}
