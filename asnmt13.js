let printNum = function(num){
    str = num.toString();
    num = str + str;
    return parseInt(num);
}

console.log(printNum(12));
console.log(typeof printNum(12));