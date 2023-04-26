// 7. Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order.


function commonElements(array1: any, array2: any): any {
    let arr: any = [];
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr.sort((a: number, b: number) => a - b);;
}
console.log(commonElements([18.98,1,2],[3,98,2,1,18.98]));