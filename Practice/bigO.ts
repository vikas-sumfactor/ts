
// O(1)
function myfn(){
  console.log(11*15);
}
myfn();

// O(n)
var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

// O(logn)
function binarySearch(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}
let nums:number[]=[1,2,3,4,5,6];
binarySearch(nums,5);

// O(n logn)
function nLogNfn(n:number){
  let y: number =n;
  while(n>1){
    n = Math.floor(n/2);
    for(let i:number =1; i<=y; i++){
      console.log(i);
      
    }
  }
}

// O(n*n)

function xyz(n:number){
  for(let i: number=0; i<n; i++){
    for(let j:number=0; j<n; j++){
      console.log((i, j));
    }
  }
}

// O(n*n*n)

function abc(n:number){
  for(let i: number=0; i<n; i++){
    for(let j:number=0; j<n; j++){
      for(let k:number=0; k<n; k++)
      {
      console.log((i:number,j:number,k:number));
    }
    }
  }
}

// O(2>n) exponential 
function fib(n:number){
  if(n===0){
    return 0;
  }
  if(n===1){
    return 1;
  }
  return fib(n-1)+fib(n-2);
}

// O(n!)
function fn(n:number){
  if(n===0){
    console.log(0);
    return;
  }
  for(let i=0; i<n; i++){
    fn(n-1);
  }
}
