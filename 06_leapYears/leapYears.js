const leapYears = function(year) {

  if(
    (year % 4 === 0) &&
    (
      (year % 400 === 0) || 
      (year % 100 !== 0)
    ) 
  ) return true;
  else return false;

  /* 
    CONSEJO PARA REFACTORIZAR
  
    Para que el código sea más comprensible, es bueno no utilizar
    números en bruto y seria más recomendable almacenar las operaciones
    en variables bien explicativas y luego trabajar con esas variables
    (tal cual hacen en la solución).
  
  */
};

// Do not edit below this line
module.exports = leapYears;
