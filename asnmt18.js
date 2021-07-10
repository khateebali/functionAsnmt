let sum = function(num){
    let S1 = 0;
    while(num != 0){
        S1 = S1 + num%10;
        num = parseInt(num/10);
    
    }
    return S1;
}

console.log(":sum of given number:  " +sum(12));