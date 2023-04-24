function palindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right])
            left++;
        right--;
        return true;
    }
    return false;
}
console.log(palindrome("abcd"));
