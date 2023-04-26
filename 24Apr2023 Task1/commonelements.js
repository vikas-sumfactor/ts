function commonElements(array1, array2) {
    var arr = [];
    for (var i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr;
}
console.log(commonElements([1, 2, "vikas"], [3, 98, 2, "vikas", 1, "rana"]));
