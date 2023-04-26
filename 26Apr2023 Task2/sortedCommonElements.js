function commonElements(array1, array2) {
    var arr = [];
    for (var i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr.sort(function (a, b) { return a - b; });
    ;
}
console.log(commonElements([18.98, 1, 2], [3, 98, 2, 1, 18.98]));
