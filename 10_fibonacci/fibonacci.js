const fibonacci = function(member) {
  const numericMember = +member;
  if (numericMember < 0 || isNaN(numericMember)) return "OOPS";
  
  let fibonacciArr = [0, 1]
  for (let i = 2; i <= numericMember; i++) {
    fibonacciArr.push(fibonacciArr[i-1] + fibonacciArr[i-2]);
  }
  return fibonacciArr[numericMember];
};

// Do not edit below this line
module.exports = fibonacci;
