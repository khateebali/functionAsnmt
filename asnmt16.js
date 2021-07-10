//Required Run rate
let runRate = function (target, maxOvers, currentScore, oversBowled){
    overLeft = maxOvers-oversBowled;
    ballsLeft = overLeft * 6;
    runLeft = target-currentScore;
    req_RR = (runLeft/ballsLeft)*6;
    return req_RR.toFixed(2);
}

console.log("The Required run rate to Win :"+runRate(193,50,38,20));