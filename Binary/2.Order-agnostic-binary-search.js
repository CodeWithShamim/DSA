function binarySearch(sortedNums, target) {
  let start = 0;
  let end = sortedNums.length - 1;

  // check ascending / descending
  let isAscen = true;
  if (sortedNums[start] > sortedNums[end]) isAscen = false;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (sortedNums[mid] === target) return mid;
    else if (sortedNums[mid] > target) {
      if (isAscen) end = mid - 1;
      else start = mid + 1;
    } else {
      if (isAscen) start = mid + 1;
      else end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([5, 4, 3, 2, 1], 5));
