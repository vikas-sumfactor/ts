function countChars(str: string): { [char: string]: number } {
  const charCounts = {};
  for (const char of str) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  return charCounts;
}
console.log(countChars("abcda"));