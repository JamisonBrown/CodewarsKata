/**
 * return the number of distinct characters
 * in the given string, that ocur more than once.
 * 
 */
function duplicateCount(text){
    //first task is to get the unique characters of the given string
    //in this case [a,b,c] are the unique characters
    textArr = text.split('');
    let counts = {}
    var finCount = 0;
    for(let i=0; i < textArr.length; i++){
        if(counts[textArr[i]]){
            counts[textArr[i]] ++;
        }
        else{
            counts[textArr[i]] = 1;
        }
    }
    for(let prop in counts){
        if(counts[prop] >= 2){
            finCount+= 1;
        }
    }
    return finCount;

}

console.log(duplicateCount("acabbca")); // should return 2.  a&b both ocurr >1 time