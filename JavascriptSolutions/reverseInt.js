

function reverseInt(x){
    //any number mod 10 returns its last digit
    var final = 0;
    let numSize = x.toString().length;
   
    if(x < 0){
        x = -x;
         let n = numSize-2;
        while(x >=1){
            let rem = x % 10;
            
            x = Math.floor(x / 10);

            final += rem * (10**n);
            n--;
        }
        if(Number.isSafeInteger(-final)){
            return -final;
        }
        return 0;
    }
    else{
        let n = numSize-1;
        while(x >=1){
            let rem = x % 10;
            x = Math.floor(x/10);
            final += rem * (10**n);
            n--;
        }
        if(Number.isSafeInteger(final)){
            return final;
        }
        return 0;
    }
}

console.log();