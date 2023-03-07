const selectionSort = function (arr) {
  const swap = (indx1, indx2) =>
    ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndx = i;

    for (let j = i; j < len; j++) {
      if (arr[minIndx] > arr[j]) minIndx = j;
    }

    if (minIndx !== i) swap(minIndx, i);
  }

  return arr;
};

console.log(selectionSort([15, 2, 4, 5, 1, 3, 7, 1, 9]));
