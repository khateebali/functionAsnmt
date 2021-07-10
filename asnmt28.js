let caseChar = function (ch){
    if(ch == ch.toUpperCase()){
        return true
    }
    else
        return false
}

let convCase = function (str){
    if(caseChar(str)== true){
        str = str.toLowerCase();
        return str;
    }
    else{
        str = str.toUpperCase();
        return str;
    }
}

console.log("The string case chnage :" +convCase("KHATEEB"));