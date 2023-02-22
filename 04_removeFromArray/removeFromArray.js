const removeFromArray = function(array, ...number) {
    for(let i = 0; i < array.length; i++) {
        for( let j = 0; j < number.length; j++)
        if (array[i] === number[j]) {
            array.splice(i,1);
            i--;
        }            
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
