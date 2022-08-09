const ftoc = function(num) {
  let celsius = (num - 32) * (5/9);
  let rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const ctof = function(num) {
  let fahrenheit = num * (9/5) + 32;
  rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
