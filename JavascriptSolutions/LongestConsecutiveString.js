
/**
 * returns the length of the longest string created by
 * concatenating k consecutive strings to each other
 * 
 * if n is the length of our string array, 
 *  "Nothing" if n=0 or k>n or k <= 0
 */
function longestConsec(stringArr, k){
    var n = stringArr.length;
    var result ='';
    if(n === 0 || k > n || k <=0){
        return '';
    }
    else{
        for(let i=0; i <=stringArr.length - k; i++){
            let str = '';
            for(let j=i; j < i+k; j++){
                str += stringArr[j];
            }
            if(result.length < str.length){
                result = str;
            }
        }
    }
    return result;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));