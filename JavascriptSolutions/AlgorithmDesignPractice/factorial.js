function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        let answer = 1;
        for(let i=n; i >= 1; i--){
            answer *= i;
        }
        return answer;
    }
}

console.log(factorial(4));

function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorialRecursive(n-1);
    }
}

console.log(factorial(4));