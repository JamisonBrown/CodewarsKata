/**
 * 
 */

// function threeSum(nums){
//     var triplets = [];
    
//     for(let i=0; i < nums.length-2; i++){
//         for(let j=i+1; j < nums.length-1;j++){
//             for(let k=j+1; k < nums.length; k++){
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     triplets.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }
//     return triplets;
// }

// function threeSumNoDup(nums){
//     var triplets =[];

//     nums = nums.sort();
    

//     for(let i=0; i < nums.length; i++){
//         if(i != 0 && nums[i] === nums[i-1]){
//             continue;
//         }
//         for(let j=i+1; j < nums.length; j++){
//             if(j != i+1 && nums[j] == nums[j-1]){
//                 continue;
//             }
//             for(let k = j+1; k < nums.length; k++){
//                 if(k != j+1 && nums[k] == nums[k-1]){
//                     continue;
//                 }
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     triplets.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }
//     return triplets;
// }



function threeSum(nums){
    nums = nums.sort();
    var result = [];
    //iterate left to right using an index
    for(let i= 0; i < nums.length; i++){
        //ensure that i will not consider duplicate values
        if(i != 0 && nums[i] == nums[i-1]){
            continue;
        }
        //for each index in nums have 2 pointers starting at opposite ends
        let j = i+1;
        let k = nums.length - 1;

        //have j and k increment and decrement respectively so that their values will eventually converge
        //and check that the values at each index add together to get 0
        while (j < k){
            if(nums[i] + nums[j] + nums[k] == 0){//if they do add to get 0
                //push the values to the result as a triplet
                result.push([nums[i], nums[j], nums[k]]);
                j++;

                //check that the value of j after incrementing is not the same
                //if it is there is a duplicate that needs to be skipped so that the result
                //remains unique
                while(j < k && nums[j] == nums[j-1]){
                    j++;
                }
            }
            else if(nums[i] + nums[j] + nums[k] < 0){
                j++;
            }
            else{
                k--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,-1,2,4]));