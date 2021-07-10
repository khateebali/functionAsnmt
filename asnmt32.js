let addForThird = function(a,b,c){
    return ((a + b == c)||(b + c == a)||(a + c == b));
}

console.log("Is sum of given two number is same as third :"+addForThird(3,4,6));