function palindrome(str:string):boolean{
    let left =0;
    let right=str.length-1;
    while(left<right){
        if(str[left]===str[right])
            left++;
            right--;
            return true;
    }
    return false;
}
console.log(palindrome("abcd"));