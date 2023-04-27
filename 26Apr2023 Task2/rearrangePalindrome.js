"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validPalindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return palindromeExist(str, left + 1, right) || palindromeExist(str, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}
function palindromeExist(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(validPalindrome("velle"));
// level is palindrome arranged bt velle
