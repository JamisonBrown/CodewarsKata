function isIsogram(str){
    //...
    //isograms contain no repeating letters consecutive or otherwise
    if(str.length == 0){
        return true;
    }

    str = str.toLowerCase();
    var map = new Map();
    
    for(let i=0; i < str.length; i++){
        if(map.has(str.charAt(i))){
            return false;
        }
        else{
            map.set(str.charAt(i), 1);
        }
    }
    return true;
}

  console.log(isIsogram('aba'));