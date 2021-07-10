let isAsc = function(num1, num2, num3){
    return Boolean(num1 > num2 && num2 > num3);
}
console.log("Nums are in Ascending order :"+isAsc(20,6,9));