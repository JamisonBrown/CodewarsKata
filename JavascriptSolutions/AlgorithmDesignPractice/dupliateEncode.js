function getDuplicates(word){
    var hash = new Map();
    word = word.toLowerCase();
    
    for(let i=0; i < word.length; i++){
      if(hash.has(word.charAt(i))){
        hash.set(word.charAt(i), hash.get(word.charAt(i))+1);
      }
      else{
        hash.set(word.charAt(i), 1);
      }
    }
    return hash;
}

function duplicateEncode(word){
    // ...
  
  //find the duplicate values
  //encode them using '(' and ')'
  //casing should be ignored
  word = word.toLowerCase();
  var charsOfWord = getDuplicates(word);
  var output = [];
  
  for(let i=0; i < word.length; i++){
    //check that the current value has a hash value >= 2
    if(charsOfWord.get(word.charAt(i)) >= 2){
      //if it does push ) to output
      output.push(')');
    }
    else{
        output.push('(');
    }
  }
  return output.join('');
}

console.log(getDuplicates("Suc ess"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("success"));