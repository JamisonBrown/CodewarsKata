/**
 * Given an array of directions North, South, East, West
 * return an array with a simplified version of the given set of directions
 * 
 * We simplify the directions by removing pairs of moot directions
 * 
 * Ex: It makes no sense to go North then immediately turn around a go back South or visa versa
 * or to go West then immediately go back East or visa versa.
 * 
 *
 */

/**
 * My first thought is to read through the array
 * and compare the current value with its neighbor.
 * 
 * if its neighbor is not its opposite, keep reading
 * 
 * if it is the opposite, remove both entries from the array
 * and continue from the neighbors neighbor.
 * @param {} arr 
 */
function dirReduc(arr){
    var changed = false; //boolean flag to track whether the array was changed
    for(let i=0; i < arr.length; i++){
        if((arr[i] == "North" && arr[i+1] == "South") || 
            (arr[i] == "South" && arr[i+1] == "North") || 
                (arr[i] == "West" && arr[i+1] == "East") || 
                    (arr[i] == "East" && arr[i+1] == "West")){
                        arr.splice(i, 2); //remove the current direction and its neighbor
                        i--; // set i back one so that the loop remains at this index when it eventually increment
                        changed = true; //
                    }
    }
    return changed ? dirReduc(arr): arr; //check if the array was changed
                                         // if so run the dirReduc again on the new array and
                                         // if not return the array
}

console.log(dirReduc([ "South", "East", "West", "North"]));
console.log(dirReduc(["West", "South", "North", "West"]));