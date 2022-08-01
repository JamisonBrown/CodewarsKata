// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// you come up with a solution that runs faster than O(n^2)

/**
 * load contents of nums into a hash table
 */

function twoSum(nums, target){
    var hash = {};

    var result = [];

    for(let i=0; i < nums.length; i++){
        if(hash[nums[i]] == null){
            hash[nums[i]] = i;
        }
        // value already in the table check if the current value and the value in the hash table
        //equal the target
        else{
            if(hash.hasOwnProperty(target - nums[i])){
                return [hash[nums[i]], i];
            }
        }
    }
    // hash table is full of values
    // check if any 2 values within hash equal the target
    for(entry in hash){
        if(hash.hasOwnProperty(target - entry)){
            return [hash[entry], hash[target-entry]];
        }
    }
}

console.log(twoSum([2,2,1], 3));