function lineNumbering(array){
    if(array.length == 0){
        return [];
    }
    else{
        for(let i=0; i < array.length; i++){
            array[i] = `${i + 1}: ${array[i]}`; 
        }
    }
    return array;
}

console.log(lineNumbering(["a", "b", "c"]));