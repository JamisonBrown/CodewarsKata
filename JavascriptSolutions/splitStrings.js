/**
 * split a string into pairs of 2 characters, if the string contains an odd number of characters 
 * replace the missing character of the last pair with an _. 
 */

//read the string into the function as a parameter
/* function solution(str){
    var result = [];
//if the string has an odd number of characters concatenate an _ to it
    if(str.length % 2 != 0){
        str = str.concat('_');
    }
//split the string into pairs of 2
    //break the string into its characters
    str = str.split('');
    //for every other character of the string
    for(let i=0; i < str.length-1; i++){
        //add that characher and its neighbor to the result array
        result.push(str[i].concat(str[i+1]));
        i++;
    }
    
//return an array containing the pairs
    return result;
} */

function solution(str){
    if(str.length % 2 != 0){
        str = str.concat('_')
    }
    else if(str == ''){
        return [];
    }

    return str.match(/.{2}/g);
}
console.log(solution('thisIsMuchEasierWithRegEx'));