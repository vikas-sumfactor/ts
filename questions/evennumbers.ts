function evenNumbers(arr:number[]){
    const array:number[]=[];
for(let i:number=0; i<arr.length; i++){
  
    arr[i] % 2 === 0 && array.push(arr[i]);
}
return array;
}
let newarr: number[] = [1,2,3,4,5];
console.log(evenNumbers(newarr));

