/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


 var merge = function(intervals) {
    var output = [];
    intervals.sort((a,b) => a[0] - b[0]); //sort acending order
    //read left -> right through intervals
    for(let i=0; i < intervals.length; i++){
        //if the output is empty(nothing to compare with) or there is no overlap
        if(output.length == 0 || output[output.length-1][1] < intervals[i][0]){//there is only one condition for a non-overlapping interval so only check if they do not overlap
            output.push(intervals[i]); // push to the output 
        }
        else{ //otherwise there is an overlap and we need to replace the endpoint of the last element in the output (this is were it occurs)
            output[output.length-1][1] = Math.max(output[output.length-1][1], intervals[i][1]);
        }
    }
    return output;
};