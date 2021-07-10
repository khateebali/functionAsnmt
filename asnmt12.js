let countDigits = function(num){
    let count = 0;
    if (count==num)
        return 1;
    else    
        for (count=0; count<num; count++ )
            num/=10;
        return count;        
}

console.log("Count of a digit : "+countDigits(432) );