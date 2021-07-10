let isPrime = function(num){
    for(let i = 2; i < num; i++)
        return (num <= 1 || num % i == 0)? false : true;
}

console.log("The number is Prime : " +isPrime(23));