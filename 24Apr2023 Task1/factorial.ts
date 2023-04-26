function factorial(n:number):number{
let fact:number =1;
for(let i= n; i>0; i--){
    fact *=i;
}
return fact;
}
console.log(factorial(8));
