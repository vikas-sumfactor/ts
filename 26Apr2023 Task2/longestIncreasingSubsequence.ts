//2. Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.



  function longestIncresingSubsequence(array: string): number {
   

    let arr:number[] = Array(array.length).fill(1);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }
    return Math.max(...arr);

}
console.log(longestIncresingSubsequence("vikas"));