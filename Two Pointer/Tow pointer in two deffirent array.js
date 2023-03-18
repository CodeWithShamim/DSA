function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  const mergedArray = [];

  while (k < arr1.length + arr2.length) {
    if (j >= arr2.length || (i < arr2.length && arr1[i] < arr2[j])) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }

    k++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1, 2], [1]));
