function spiralOrder(matrix) {
    var result = [];
    
    //top boundary   bottom boundary
    var top = 0; var bottom = matrix.length;
    
    //left boundary     right boundary
    var left = 0; var right = matrix[0].length;
    
    //while the boundaries are not the same
    while(left < right && top < bottom){
        //get every i in the top most row
        for(let i=left; i < right; i++){
            result.push(matrix[top][i]);
        }
        top += 1;
        
        //get everything in the rightmost row
        for(let i=top; i < bottom; i++){
            result.push(matrix[i][right-1]);
        }
        right -= 1;
        
        //important there are times where the solution will backtrack over an already seen element because the boundaries will
        //have overlapped. to prevent this from causing duplicates, we need to break out of the loop if the boundaries overlap.
        if(!(left < right && top < bottom)){
            break;
        }
        
        //get everything in the bottom row
        for(let i=right-1; i >=left; i--){
            result.push(matrix[bottom-1][i]);
        }
        bottom -=1;
        
        //get everything in the left row
        for(let i=bottom-1; i >= top; i--){
            result.push(matrix[i][left]);
        }
        left += 1;
        
    }
    return result;
}

const matrix = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                ];

const matrix2 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];

console.log(spiralOrder(matrix));
console.log(spiralOrder(matrix2));