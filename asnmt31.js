let parseNum = function (num){
    let LastDigit = num % 10;
    return LastDigit;
}
let SameLastDigit = function (a,b){
    return (parseNum(a) == parseNum(b));
}

console.log("Is the last digit of the given number is same:" +SameLastDigit(99,789));
console.log("Is the last digit of the given number is same:" +SameLastDigit(99,78));