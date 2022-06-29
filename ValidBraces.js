/**
 * A string of braces is considered valid
 * if all braces are matched with the correct brace
 * 
 */

function validBraces(braces){

    let bracesArr = braces.split('');
    let braceStack = [];
    
    for(let i=0; i < bracesArr.length; i ++){
        if(bracesArr[i] == '(' || bracesArr[i] == '{' || bracesArr[i] == '['){
            braceStack.push(bracesArr[i]);
        }
        else if(bracesArr[i] == ')' && braceStack[braceStack.length - 1] == '('){
            braceStack.pop();
            
        }
        else if(bracesArr[i] == '}' && braceStack[braceStack.length - 1] == '{'){
            braceStack.pop();
        }
        else if(bracesArr[i] == ']' && braceStack[braceStack.length - 1] == '['){
            braceStack.pop();
        }
        else if(bracesArr.length % 2 != 0){
            return false;
        }
        else if(i == 0 && bracesArr[i] == ']' || bracesArr[i] == '}' || bracesArr[i] == ')'){
            return false;
        }
        
    }
    
    return braceStack.length == 0;
}

console.log(validBraces("))")); //false;
console.log(validBraces("()")); //true
console.log(validBraces("[]")); //true
console.log(validBraces("{}")); //true;
console.log(validBraces("")); //true;
console.log(validBraces(("(})")));//false;
console.log(validBraces("[}]{"));//false;