function sumIntervals(intervals) {
    //TODO
    //sorting and merging now happens with the help of the function merge
    var sorted = mergeIntervals(intervals);
    //3.calculate the length of the remaining intervals
    //the length of an interval is end - start
    //4.return the sum of those lengths
    var sum=0;
    
    for(let i=0; i < sorted.length-1; i++){
      sum+=sorted[i][1] - sorted[i][0];
    }
    return sum;
  }
  
  
  //1.sort the intervals in ascending order based on an intervals[i]'s starting position
  
  function mergeIntervals(intervals){
    intervals.sort((a,b) => a[0] - b[0]);
    
    //2.check the intervals for overlaps; combine any overlaps into a single interval
    var output = [];
    
    for(let i=0; i < intervals.length; i++){
      if(output.length==0 || output[output.length-1][1] < intervals[i][0]){
        output.push(intervals[i]);
      }
      else{
        output[output.length-1][1] = Math.max(output[output.length-1][1], intervals[i][1]);
        
      }
    }
    return output;
  }