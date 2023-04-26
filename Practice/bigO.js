// O(1)
function myfn() {
    console.log(11 * 15);
}
myfn();
// O(n)
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// O(logn)
function binarySearch(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        if (target < nums[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}
var nums = [1, 2, 3, 4, 5, 6];
binarySearch(nums, 5);
// O(n logn)
function nLogNfn(n) {
    var y = n;
    while (n > 1) {
        n = Math.floor(n / 2);
        for (var i_1 = 1; i_1 <= y; i_1++) {
            console.log(i_1);
        }
    }
}
// O(n*n)
function xyz(n) {
    for (var i_2 = 0; i_2 < n; i_2++) {
        for (var j = 0; j < n; j++) {
            console.log((i_2, j));
        }
    }
}
// O(n*n*n)
function abc(n) {
    for (var i_3 = 0; i_3 < n; i_3++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                console.log((i_3, j, k));
            }
        }
    }
}
// O(2>n)
function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
