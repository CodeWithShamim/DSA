// ex-1
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  return s;
};
console.log(reverseString(["a", "b", "c", "d", "e"]));

// ex-2
var isPalindrome = function (s) {
  const newStr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0, j = newStr.length - 1; i < j; ) {
    if (newStr[i] !== newStr[j]) return false;
    i++;
    j--;
  }

  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
