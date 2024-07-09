const repeatString = function (string, timesToRepeat) {
  if (timesToRepeat < 0) return "ERROR";
  
  let newString = "";
  for (let i = 0; i < timesToRepeat; i++) {
    newString += string;
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
