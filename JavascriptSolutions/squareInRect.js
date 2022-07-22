/**
 * this function takes the dimensions of a rectangle (height != width)
 * and returns an array with the dimensions of the squares that can be made 
 * within the rectangle. Because squares height = width we only need to return one 
 * number for each square.
 */

/**
 * Ex: sqareInRect(5,3) => [3,2,1,1]
 * This is the case becuse a 5 * 3 rectangle has an area of 15 units
 * we want to know how we can break these 15 units into the min number of 
 * squares that can fit within the rectangle. 
 */

/**
 * 5 * 3 = 15 
 * the larges square we can make is 3 * 3
 * leaving a remaining area of 2 * 3
 * the larges square that can be made here is 2 * 2
 * leaving a remaining area of 1 * 2
 * because the height of the area is only 1 we can simply break the section
 * into a number of squares with an area of 1 equal to the width of the area.
 * 
 * 
 */
                  //height
function sqInRect(length, width){
     // array holding the squares found within the rectangle
    if(length === width || length === 0 || width === 0){
        return null;
    }
    var squaresFound = [];

    while(length !== width){
        if(length > width){
            squaresFound.push(width);
            length = (length - width);
        }
        else if(length < width){
            squaresFound.push(length);
            width = (width - length);
        }
    }
    squaresFound[squaresFound.length] = squaresFound[squaresFound.length -1];
    
    return squaresFound;
}

console.log(sqInRect(4,6));
