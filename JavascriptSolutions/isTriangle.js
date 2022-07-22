/**
 * each parameter represents a side of a triangle
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * 3 integers represent a triangle
 * iff each side is less then the sum of the other 2 sides
 */
function isTriangle(a,b,c){
    if(a < b+c && b < a+c && c < a+b){
        return true;
    }
    return false;
}