/**
 * given a chocolate bar of size n x m, return the
 * minimum number of breaks needed to reduce the bar
 * into unbreakable 1x1 squares
 */

/**
 * Ex: if a bar is of size 2 x 1, you can break it one time
 * and get 2, 1 x 1 squares. 
 * 
 * Ex: if a bars is of size 2 x 2, you would break the bar 3 times,
 * 
 * once to get 2, 2 x 1 bars and must break each one once to get 4 1 x 1 bars
 * 
 */

/**
 *
*/
function breakChocolate(n,m){
    if( (n == 1 && m ==1) || (n < 1) || (m < 1)){
        return 0;
    }  
        
    return (n*m)-1;  
}

console.log(breakChocolate(3,5));