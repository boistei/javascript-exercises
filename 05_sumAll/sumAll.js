const sumAll = function(numA, numB) {
    let result=0;
    if (numA < 0 || numB < 0  || 
    typeof numA !== "number" || 
    typeof numB !== "number")
        return "ERROR";
    let first = (numA > numB)?numB:numA;
    let second = (numA > numB)?numA:numB;
    for(let i = first; i <= second; i++)
        result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
