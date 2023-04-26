//Write a function that takes a sorted array of integers and a target integer as input and returns the index of the target integer in the array, or -1 if it does not exist.
function targetIndex(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (target > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(targetIndex([11, 22, 33, 44, -55], 33));
