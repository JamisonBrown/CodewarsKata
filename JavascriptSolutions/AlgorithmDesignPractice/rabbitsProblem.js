/**
 * Multiplying rabbits problem 
 * Assume: 
 * 1. rabbits never die
 * 2. rabbits can breed at the start of their 3rd month of life and every month following
 * 3. each sexually mature pair of rabbits gives birth to a male/female pair
 * 
 * Calculate how many rabbits would be alive after n months
 */

function rabbits(n){
    if(n == 1 || n == 2){
        return 1;
    }
    else{
        return rabbits(n-1) + rabbits(n-2);
    }
}
console.log(rabbits(6));