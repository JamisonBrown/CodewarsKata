/**
 * This function takes a string of parentheses
 * and checks for valid sets of parentheses
 * 
 * A vaild set of parentheses contains matching opening and closing
 * parentheses Ex: "()()()" is valid because each opening parentheses
 * has a matching closing parentheses
 * 
 * 
 */

/**
 * the plan is to use a stack to help process the parentheses
 * 
 * I want to push all '(' to the stack, and pop them from the stack
 * if we read a ')' from the string.
 * 
 * @param {*} parens 
 * @returns true: if we reach the end of the string and the stack is empty. and false otherwise
 * 
 */
function validParentheses(parens){
    parens = parens.split('');

    var stack = [];
    //if there are an odd number of characters return false
    if(parens.length % 2 != 0){
        return false;
    }
    // if the string begins with a ')' return false, there will never be a match for it
    else if(parens[0] == ')'){
        return false;
    }
    else if(parens.length == 0){
        return true;
    }
    // otherwise we have a '(' as the first character and we need to process it
    else{
        stack.push(parens[0]);

        for(let i=1; i < parens.length; i++){
            if(parens[i] == '('){
                stack.push(parens[i]);
            }
            else if(parens[i] == ')' && stack[stack.length-1] == '('){
                stack.pop();
            }
            else if(parens[i] == ')' && stack.length == 0){
                return false;
            }
        }
    }
    return stack.length == 0;
}

console.log(validParentheses("())()")); //false
console.log(validParentheses(")()()"));//false

console.log(validParentheses("()((()))")); //true
console.log(validParentheses("((((((((((")); //false
console.log(validParentheses('()))')); //false