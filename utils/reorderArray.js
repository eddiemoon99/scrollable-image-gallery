// helper function for randomizing an array with recursion
export const recursiveRandomizeArray = function(originalArray) {
  let newRandomizedArray = [];

  if (!originalArray.length) {
    return newRandomizedArray;
  }

  let i = Math.floor(Math.random() * originalArray.length);
  newRandomizedArray.push(originalArray[i]);
  let slicedArray = originalArray.slice(0, i).concat(originalArray.slice(i+1));

  return newRandomizedArray.concat(recursiveRandomizeArray(slicedArray));
}