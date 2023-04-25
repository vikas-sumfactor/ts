function palindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(palindrome("vikas"));
