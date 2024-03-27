// Reverse
/*
Write a recursive function that accepts a string and
returns the string backwards.

Example reverse(sneed) returns 'deens' 

At first glance this seems straightforward, especially if
concat works with strings.
*/

function reverse(str) {
	if (str.length >= 1) {
		let strChr = str[str.length - 1];
		return strChr.concat(reverse(str.slice(0, -1)));
	}
	return "";
}

function reverseSolution(str) {
	if (str.length <= 1) return str;
	return reverseSolution(str.slice(1)) + str[0];
}

let testStr = "Sneed";
let testStr2 = " Seed & Feed";

// console.log(testStr[testStr.length -1]);
// console.log(testStr.concat(testStr2))

// console.log(reverse('Sneed'));
// console.log(reverse('Chuck'));
// console.log(reverse(''));

/* Job done! Had a couple hiccups with how to handle the
base case in this one, but I got there eventually. */
