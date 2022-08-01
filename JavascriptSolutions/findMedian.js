/**
 * this function returns the median of 2 separate arrays 
 * as if they were merged
 * 
 * Ex: nums1= [1,3]  nums2= [2]
 *      merged = [1,2,3]  median = 2
 */

/**
 * we can merge the two lists by reading them from the start
 * start at index 1 for each array and feed the lower value into a
 * larger array meant to hold the contents of the given ones
 * 
 */

function merge(arr1, arr2){
    let result = arr1.concat(arr2);
    return result.sort();
}

function findMedian(arr1,arr2){
    let mergedArr = merge(arr1,arr2);

    let length = mergedArr.length;
    return mergedArr[Math.floor(length/2)];
}

console.log(findMedian([1,3,4], [2,5]));