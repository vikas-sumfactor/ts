type Bird ={
    name:string;
    flyingSpeed:number;
}

type Animal ={
    name:string;
    runningSpeed:number;
}

type Categoery = Bird | Animal;

function myfn(categoery:Categoery){
    console.log(categoery.name);
    if("runningSpeed" in categoery){
        console.log(categoery.runningSpeed);
    }
    
}
myfn({name:"lion" ,runningSpeed:100});