const reverseString = function(word) {
    let reverse = "";
    for(let i = word.length; i >= 0; i--)
    {
        reverse+= word.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
