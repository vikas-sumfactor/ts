"use strict";
//2. Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.
Object.defineProperty(exports, "__esModule", { value: true });
function longestIncresingSubsequence(array) {
    var arr = Array(array.length).fill(1);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }
    return Math.max.apply(Math, arr);
}
console.log(longestIncresingSubsequence("vikas"));
