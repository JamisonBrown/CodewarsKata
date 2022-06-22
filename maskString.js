// return masked string
function maskify(cc) {
    const unmaskedString = cc.split("");
    
    if(unmaskedString.length < 4){
      return unmaskedString.join("");
    }
    else{
      for(var i=0; i < unmaskedString.length-4; i++){
        unmaskedString[i] = "#";
      }
    }
    return unmaskedString.join("");
}
  