//fibonaci

let fibonaci = function (num){
    let a = 0;
    let b = 1;
    if(num == 1){
        console.log(a);
    }
    else{
        console.log(a,b);
        for (let i = 2; i<num; i++){
            let c = a + b;
            a = b;
            b = c;
            console.log(c);
        }
    }
}

console.log("The fibonaci series : " +fibonaci(6));