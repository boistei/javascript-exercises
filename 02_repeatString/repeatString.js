const repeatString = function(word,times) {
    let final = "";
    if (times < 0)
        return "ERROR";
    for(let i = 0; i < times; i++){
        final += word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
