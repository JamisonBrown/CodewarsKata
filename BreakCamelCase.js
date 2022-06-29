
/**
 * a camel case string begins with the first
 *                   word being all lowercase letters and each
 *                   subsequent word begins with a capital letter
 * @param {*} string : a string that follows camel Casing
 *                   
 * 
 */
function solution (string){
    return(string.replace(/([A-Z])/g, ' $1'));    
}

console.log(solution("thisIsCamelCase"));