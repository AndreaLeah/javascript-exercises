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

const power = function() {
	
};

const factorial = function() {
	
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
