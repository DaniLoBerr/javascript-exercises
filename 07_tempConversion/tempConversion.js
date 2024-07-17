const convertToCelsius = function(temperatureInFahrenheit) {

  const fahrenheitToCelsiusFormula = ((temperatureInFahrenheit - 32) * (5/9));
  const conversionRoundedToOneDecimal = +fahrenheitToCelsiusFormula.toFixed(1);
  return conversionRoundedToOneDecimal;
};

const convertToFahrenheit = function(temperatureInCelsius) {

  const celsiusToFahrenheitFormula = (temperatureInCelsius * (9/5) + 32);
  const conversionRoundedToOneDecimal = +celsiusToFahrenheitFormula.toFixed(1);
  return conversionRoundedToOneDecimal;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
