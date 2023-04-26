// 9. Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.

function subArraySum(arr:number[]):number{
    let sum:number = arr[0];
    for(let i:number=1; i<arr.length; i++){
        arr[i]=Math.max(arr[i],arr[i]+arr[i-1]);
        sum = Math.max(sum,arr[i]);
    }
    return sum;
    
}
 console.log(subArraySum([1,2,3,4,5]));