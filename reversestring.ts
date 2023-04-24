function reverseString(str:string):string {
    let reversestring:string = "";
    for (let i:number = str.length - 1; i >= 0; i--) {
        reversestring += str[i];
    }
    return reversestring;
}
console.log(reverseString("vikas"));