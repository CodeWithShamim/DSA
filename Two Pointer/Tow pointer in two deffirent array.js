function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1, 2, 3, 4, 5], [1, 1, 1, 2, 2, 7, 7, 7]));
