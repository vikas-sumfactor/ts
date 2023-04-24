
type Fish = {swim:() => void};
type Bird = {swim:() => void};

function isFish(pet : Fish | Bird) : pet is Fish{
    return(pet as Fish).swim!== undefined
}
function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet 
        return "fish food";
    }
    else{
        pet
        return "bird food"
    }
}


//  let classs = ["boy", "girl"];

//  let arr = classs.filter(isGirl(girl));

//  function isGirl(gender:object){
//   return gender.isGirl
// //  }
 
// let arr = [1,2,3,4,5,6];


// let arr2 = arr.filter(isEven);

// function isEven(categeory:number):categeory is number{
// return categeory.isEven;
// }





