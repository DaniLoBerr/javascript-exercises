const palindromes = function (string) {
  const cleanedString = string
    .toLowerCase()
    .replace(/[,.!? ]/g, "");
  const reversedCleanedSring = cleanedString
    .split("")
    .toReversed()
    .join("")
  return cleanedString === reversedCleanedSring;
};

// Do not edit below this line
module.exports = palindromes;
