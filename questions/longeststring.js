function longestString(stringes) {
    var longest = '';
    for (var _i = 0, stringes_1 = stringes; _i < stringes_1.length; _i++) {
        var str = stringes_1[_i];
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}
console.log(longestString(["a", "abc", "ab", "abcdef"]));
