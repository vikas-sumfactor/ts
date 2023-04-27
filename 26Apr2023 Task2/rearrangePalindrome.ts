

function canFormPalindrome(str:string):boolean
{
	let list:string[] = [];
	for(let i = 0; i < str.length; i++)
	{
		if (list.includes(str[i]))
			list.splice(list.indexOf(str[i]), 1);
		else
			list.push(str[i]);
	}
	if (str.length % 2 === 0 && list.length === 0 ||
	(str.length % 2 === 1 && list.length === 1))
		return true;
	else
		return false;
}
console.log(canFormPalindrome("vikas"));