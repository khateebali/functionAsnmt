let hundrthDigit = function (num){
    let placeDigit = num%100;
    placeDigit /= 10;
    return parseInt(placeDigit);

}

console.log('On 100th place of the Digit :' +hundrthDigit(9978));