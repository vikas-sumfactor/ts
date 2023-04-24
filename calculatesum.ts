export{}

function calculateSum(){
    let  arr:number[] =[1,2,3,4,5];
   let sum:number =0;
      for(let i:number=0; i<arr.length; i++){
          sum = sum+arr[i];
      }
      console.log(sum);
  };
  calculateSum();