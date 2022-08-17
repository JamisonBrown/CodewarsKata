/**
 * reverseString prints a string backwards
 * 
 */

function reverseString(string, size){
    if(size < 1){
        //do nothing
        console.log("");
    }
    else{
        console.log(`${string[size-1]}`);
        reverseString(string, size-1);
    }
}

//void console.log(reverseString("Hello", 5));


function reverseString2(string, size){
    if(size < 1){
        //do nothing
        console.log('');
    }
    else{
        
        reverseString2(string.substring(1,size), size-1);
        console.log(string[0]);
    }
}

//console.log(reverseString2("Hello", 5));

function reverseString3(string){
    
    if(string.length < 1){
        console.log('');
    }
    for(let i= string.length-1; i >=0; i--){
        console.log(string.charAt(i));
    }
}

console.log(reverseString3("Hello"));