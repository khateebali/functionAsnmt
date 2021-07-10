let factorial = function (n) {
     return (n == 1 || n == 0) ? 1 : n * factorial(n-1);
}

console.log("factiorial of a number is "+factorial(6));

//op: 720