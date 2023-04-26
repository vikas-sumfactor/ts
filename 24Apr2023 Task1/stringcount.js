function countChars(str) {
    var charCounts = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (charCounts[char]) {
            charCounts[char]++;
        }
        else {
            charCounts[char] = 1;
        }
    }
    return charCounts;
}
console.log(countChars("abcda"));
