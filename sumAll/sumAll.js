var sumAll = function(start,end) {
if (start > end){
    return sumAll(end,start)
}

if (typeof start != "number" ||
 typeof end != "number" || 
end < 0 ||
start < 0){
    return "ERROR"
}


   let sum = 0;
    for ( i = start ; i <= end ; i++){
        sum += i
    }
    return sum;
}

module.exports = sumAll
