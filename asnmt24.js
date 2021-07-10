let convInfour = function(num){
    let dig;
    let count = 0;
    while(num!=0 && count<2){
    dig = num.toString();
    num = dig + dig;
    num = parseInt(num);
    count++;
    }
    return num;
}

let addDigit = function (num1,num2,num3) {
    return convInfour(num1)+convInfour(num2)+convInfour(num3);  
}
console.log(addDigit(1,2,3));