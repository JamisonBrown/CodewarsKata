/**
 * Do mathematical operations using nothing but functions
 */

 function zero(fn) {
    return fn ? fn(0): 0;
 }

 function one(fn){
    return fn ? fn(1): 1;
}

 function two(fn) {
    return fn ? fn(2): 2;
 }

 function three(fn) {
    return fn ? fn(3): 3;
 }

 function four(fn) {
    return fn ? fn(4): 4;
 }

 function five(fn) {
    return fn ? fn(5): 5;
 }

 function six(fn) {
    return fn ? fn(6): 6;
 }

 function seven(fn) {
    return fn ? fn(7): 7;
 }

 function eight(fn) {
    return fn ? fn(8): 8;
 }

 function nine(fn) {
    return fn ? fn(9): 9;
 }
 //=============================================================================================================
 function plus(rightNum) {
    return function(leftNum){
        return leftNum + rightNum;
    }
 }

 function minus(rightNum) {
    return function(leftNum){
        return leftNum - rightNum;
    }
 }

 function times(rightNum) {
    return function(leftNum){
        return leftNum * rightNum;
    }
 }

 function dividedBy(rightNum) {
    return function(leftNum){
        return leftNum / rightNum;
    }
 }

console.log(eight(times(three())));