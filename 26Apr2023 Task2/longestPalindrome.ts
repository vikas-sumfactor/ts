export{}
function isPalindrome(str:string):boolean{
    let left =0;
    let right= str.length-1;
    while(str[left]!==str[right]){
        return false;
    }
        left++; right--;
return true;
}


 

function longestPalindromeSubstring(str:string){
    let subString: string= str;
    let longestsubString:string="";

    for (let i=0;i<str.length; i++){
        for (let j=i+1; j<str.length; j++){
          let str = subString.substring(i,j);
            if(str.length>1 && isPalindrome(str)){
                if(longestsubString.length<str.length){
                    longestsubString=str;
                }
           
            }
        }
        
    }
    console.log(longestsubString);
}
longestPalindromeSubstring("ablevelba");