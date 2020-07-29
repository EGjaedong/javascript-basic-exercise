export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  let result = [];

  if (!array.length) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if ((typeof (array[i])) === 'number') {
      result.push(array[i]);
    } else {
      result = result.concat(array[i]);
    }
  }

  return result;
}
