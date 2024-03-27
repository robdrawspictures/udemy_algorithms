// Palindromes
/* I hate this one already. In case you forgot, a palindrome is a
word or sentence that is symmetrical; i.e. it reads the same front
to back.

My favourite example is 'Rise to vote, sir.'

By the looks of things, for the purposes of this function it only
needs to accept a single word, so I don't need to worry about stripping
out spaces or punctuation.

On instinct, I feel like this should either be a dual recursive OR
I need to slice the front and back characters simultaneously. We can
also disregard any strings with an even number of characters. It also
appears I don't need to consider case, which is another headache avoided,
although it wouldn't be a huge problem to sort any of that.
*/

function isPalindrome(str) {
	if (str.length % 2 === 0) return false;
	if (str[0] !== str[str.length - 1]) return false;
	if (str.length > 1) {
		let newStr = str.substring(1, str.length - 1);
		return isPalindrome(newStr);
	}
	return true;
}

function isPalSolution(str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalSolution(str.slice(1, -1));
	return false;
}

let testSub = testStr.substring(1, testStr.length - 1);

// console.log(testSub);
// console.log(isPalindrome('sneed'));
// console.log(isPalindrome('kayak'));
// console.log(isPalindrome('sneeds'));
// console.log(isPalindrome(''));

/* Success! At least as far as my tests go. I'm not sure
what the result should be if an empty string is passed in...
philosophically speaking is emptiness symmetrical? Too deep
for me.

Anyway, let's see what Udemy thinks...PASS.

So far I'm struggling less with these than I did with the regular ones.
Famous last words.

*/
