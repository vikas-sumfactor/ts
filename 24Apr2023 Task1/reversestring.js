function reverseString(str) {
    var reversestring = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversestring += str[i];
    }
    return reversestring;
}
console.log(reverseString("vikas"));
