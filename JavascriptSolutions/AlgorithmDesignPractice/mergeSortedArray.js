/**
 * takes 2 sorted arrays and merges them
 */

function mergeArray(nums1, nums2){
    var output=[];

    for(let i=0; i < nums1.length-1; i++){
        for(let j=0; j < nums2.length-1; j++){
            if(nums1[i] < nums2[j]){
                output.push(nums1[i]);
                
            }
            else if(nums2[j] < nums1[i]){
                output.push(nums2[j]);
            
            }
            else{
                output.push(nums1[i]);
                output.push(nums2[j]);
              
            }
        }
    }
    return output;
}

console.log(mergeArray([1,3,5], [2,4,6]));