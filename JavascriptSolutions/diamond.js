/**
 * function to print a diamond of a given size
 * 
 * if the input is even or a negative number return null
 */


function diamond(n){
    //if n is even or negative
    if(n % 2 == 0 || n < 0 ){
        return null;
    }
    else{
        //to print a diamond of size n
        var str = '';
        for (let i = 0; i < n; i++) { 
          let len = Math.abs((n-2*i-1)/2);
          str += ' '.repeat(len);
          str += '*'.repeat(n-2*len);
          str += '\n';
        }
    }
    return str;
}

console.log(diamond(5));