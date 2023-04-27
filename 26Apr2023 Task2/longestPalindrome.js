"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while (str[left] !== str[right]) {
        return false;
    }
    left++;
    right--;
    return true;
}
function longestPalindromeSubstring(str) {
    var subString = str;
    var longestsubString = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            var str_1 = subString.substring(i, j);
            if (str_1.length > 1 && isPalindrome(str_1)) {
                if (longestsubString.length < str_1.length) {
                    longestsubString = str_1;
                }
            }
        }
    }
    console.log(longestsubString);
}
longestPalindromeSubstring("ablevelba");
