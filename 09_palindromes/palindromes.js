const palindromes = function (word) {
    let theWord = word.toLowerCase().trim();
    let newWord = '';
    for (let i = theWord.length; i >= 0; i--)
        newWord += theWord.charAt(i)
    return newWord === theWord;
};

// Do not edit below this line
module.exports = palindromes;
