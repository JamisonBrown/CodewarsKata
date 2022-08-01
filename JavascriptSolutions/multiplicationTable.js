/**
 * This function takes an integer input 'n'
 * and returns an n * n array of the multiplication tables
 * up to n
 */

/**
 * Ex: multiplicationTable(3)
 *  returns 1 2 3 
 *          2 4 6
 *          3 6 9
 * 
 * formatted like [[1,2,3], [2,4,6], [3,6,9]]
 */

//multiTable = [] indexed with i

//multiTable[i=1] = [1,...,n]//sub-index internal arrays with k
//multiTable[i > 1] = for each k in multiTable[i-1], multiTable[i] = multiTable[i-1][k] + multiTable[i-1][k]

function multiplicationTable(size){
    let multiplicationTable=[];

    let i=0; //index for multiplication table
    while(i < size){
        
        if(multiplicationTable.length==0){ //if the multiplication array is empty
            let subArray=[]; //create subarray to place inside
            for(let k=0; k < size; k++){
                subArray.push(k+1); //add values 1 through n to subarray
            }
            multiplicationTable.push(subArray); //push sub array to multiplication table
            i++;
        }
        else{ //muliplication table has content already
        // we should look at the previous sub array within multiplication table
            let prev = multiplicationTable[i-1];
            let first = multiplicationTable[0];

            let subArray = []; //subarray to be filled
            for(let k=0; k < prev.length; k++){ //
                subArray.push(prev[k] + first[k]);
            }
            multiplicationTable.push(subArray);
            i++;
        }  
    }
   return multiplicationTable;
}
console.log(multiplicationTable(4));