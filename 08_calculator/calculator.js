const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  if (!nums) {
    return 0;
  } else {
    let sum = 0;
    for (let num of nums)
      sum += parseInt(num);
    return sum;
  }
};

const multiply = function (nums) {
  if (!nums)
    return 0;
  let prod = 1
  for (let num of nums) {
    prod *= num;
  }
  return prod;
}

const power = function (a, n) {
  return a ** n;
};

const factorial = function (num) {
  if (!num)
    return 1;
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
