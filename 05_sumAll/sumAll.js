const sumAll = function(num1, num2) {

  let result =  0;
  const sortedArrNums = [num1, num2].sort();

  if (
    (num1 < 0 || 
    num2 < 0) ||
    (!Number.isInteger(num1) || 
    !Number.isInteger(num2))
  ) result = "ERROR";
  else {
    for (let i = sortedArrNums[0]; i <= sortedArrNums[1]; i++) {
      result += i;
    }
  }

  /* 
  
  Formas alternativas ordenar el valor mínimo y el valor máximo del rango:

  #1

    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }

  #2 Utilizando una desestructuración de arrays:

    if (min > max) [min, max] = [max, min];

  */
  
  return result;
};

// Do not edit below this line
module.exports = sumAll;
