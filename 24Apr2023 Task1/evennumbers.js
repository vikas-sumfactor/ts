function evenNumbers(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 && array.push(arr[i]);
    }
    return array;
}
var newarr = [1, 2, 3, 4, 5];
console.log(evenNumbers(newarr));
