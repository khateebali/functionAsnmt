let largest = function (num1, num2, num3){
    return (num1 > num2 && num1 > num3) ? num1 : (num2>num3) ? num2 : num3;
}


console.log("The largest number is : " +largest(20,40,2));