/**
 * return the number of distinct characters
 * in the given string, that ocur more than once.
 * 
 */
function duplicateCount(text){
    //first task is to get the unique characters of the given string
    //in this case [a,b,c] are the unique characters
    textArr = text.split('');
    let counts = {} //creating an object this way allows us to use the
                    //unique characters to represent the keys/indicies in the object
                    //the values for these keys is initialized to 0 by default

    var finCount = 0;//number of unique characters repeated >1 times

    for(let i=0; i < textArr.length; i++){
        //if the created object holds the car value as a key
        if(counts[textArr[i]]){

            counts[textArr[i]] ++; //increment the value stored at that key
        }
        else{
            counts[textArr[i]] = 1; //otherwise initialize the value to 1
        }
    }
    for(let prop in counts){ //check each key in counts
        if(counts[prop] >= 2){ //if the value of the key is >=2
            finCount+= 1; //increment the final count
        }
    }
    return counts;

}

console.log(duplicateCount("acabbca")); // should return 2.  a&b both ocurr >1 time