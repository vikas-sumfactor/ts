function secondLargestNumber(){
    const numbers:number[] =[99,67,95,2,7];
    let max =0;
    let secondMax=0;
    for(let i: number =0; i<numbers.length; i++){
  if(numbers[i]>max){
    max=numbers[i];
  }
  else if(numbers[i]<max && numbers[i]>secondMax)
  secondMax=numbers[i];
    }
    console.log("first largest number is: " +max);
     console.log("first largest number is: " +secondMax);
  }
  secondLargestNumber();