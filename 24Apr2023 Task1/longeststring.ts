
function longestString(stringes: string[]): string {
    let longest = '';
    for (const str of stringes) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
    return longest;
  }
  console.log(longestString(["a","abc","ab","abcdef"]));