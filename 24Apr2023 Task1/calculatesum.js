"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSum() {
    var arr = [1, 2, 3, 4, 5];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
;
calculateSum();
