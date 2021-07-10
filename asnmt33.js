
let lotteryPrice = function(ltrnum) {
    if (ltrnum % 4 == 0){
        return 6;
        
    }
    
    if (ltrnum % 7 == 0){
        return 10;
        
    }

    if (ltrnum % 7 == 0 && letnum % 4 == 0){
        return 20;
    }
    else {
        return 0;
    }

}

console.log("The Winning Prize for lottery :" +lotteryPrice(000028) +"\n");

console.log("The Winning Prize for lottery :" +lotteryPrice(97650132) +"\n");


console.log("The Winning Prize for lottery :" +lotteryPrice(9999997) +"\n");