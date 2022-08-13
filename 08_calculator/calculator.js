const add = function(...args) {
  let sumzy = args[0] + args[1];
  return sumzy;
};

const subtract = function(num1, num2) {
 let sumzy = num1 - num2;
 return sumzy;
};

const sum = function(...args) {
  let total = 0;
  for (let arg of args[0]) {
    total += arg;
  }
  return total;
};

const multiply = function(...args) {
  let total = 0;
  for (let arg of args[0]) {
    if (total == 0) {
      total += arg;
    }
    else {
    total *= arg;
    }}
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(j) {
  let answer = 1;
	if (j == 0 || j == 1) {
    return answer;
  }
  else {
    for (let i = j; i >= 1; i--) {
      answer = answer * i;
    }
  return answer;
  }
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
