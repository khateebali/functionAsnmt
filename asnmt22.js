let sumOfFour = function (num) {
    let result = 0;
    let count = 0;
    while(num != 0 && count<4){
        result = result + num%10;
        num = parseInt(num/10);
        count++;
    }
    return result;
}

console.log("The Sum of last 4 digits : " +sumOfFour(0987654321));