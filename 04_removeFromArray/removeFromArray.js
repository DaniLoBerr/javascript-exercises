const removeFromArray = function(array, ...elementsToRemove) {

  return array.filter(val => !elementsToRemove.includes(val))

}

/*  My first solution:

  const sortedArray = array.sort();
  const sortedElementsToRemove = elementsToRemove.sort();
  let newArray;

  if (sortedArray.toString() === sortedElementsToRemove.toString()) {
    newArray = [];
  } else {
    newArray = array.filter(
      element => 
        (element !== elementsToRemove[0]) && 
        (element !== elementsToRemove[1])
    )
  }

  return newArray;

*/

// Do not edit below this line
module.exports = removeFromArray;
