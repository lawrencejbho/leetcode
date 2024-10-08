// somehow my first code was faster, I think it's something to do with the unnecessary if statement checks everytime
// the regex will check for numbers and letters and strip everything else

var isPalindrome = function (s) {
  let my_string = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let i = 0;
  let j = my_string.length - 1;

  while (i < j) {
    if (my_string[i] !== my_string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(palindrome("A man, a plan, a canal: Panama"));

// this one is a little faster and much more concise
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
