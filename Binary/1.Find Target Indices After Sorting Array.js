// var targetIndices = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let index = binarySearch(nums, target);

//   if (index === -1) {
//     return [];
//   }

//   let res = [index];
//   let l_index = index - 1;
//   let r_index = index + 1;

//   for (let i = l_index; i >= 0; i--) {
//     if (nums[i] === target) {
//       res.unshift(i);
//     } else {
//       break;
//     }
//   }

//   for (let i = r_index; i <= nums.length; i++) {
//     if (nums[i] === target) {
//       res.push(i);
//     } else {
//       return res;
//     }
//   }
// };

// function binarySearch(sortedNums, target) {
//   let start = 0;
//   let end = sortedNums.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);
//     if (sortedNums[mid] === target) return mid;
//     else if (sortedNums[mid] > target) end = mid - 1;
//     else start = mid + 1;
//   }

//   return -1;
// }

// console.log(targetIndices([1, 2, 3, 4, 5], 5));

var targetIndices = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) result.push(i);
  }

  return result.length !== 0 ? result : [];
};

console.log(targetIndices([1, 2, 3], 1));
