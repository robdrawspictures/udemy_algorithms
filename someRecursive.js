// Some Recursive
/* Another case of the description is confusing me more than the approach.

The brief requests a recursive function that accepts an array and a callback
and returns true if a single value in the array returns true when passed
to the callback.

The example code provided looks like this:
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

What is confusing the life out of me is how the callback is
supposed to interact with the array. Especially in the last example:
I understand I'm supposed to compare each value in the array to see
if it's greater than 10, but how am I supposed to pass those values
to the callback when it's defined inside the function call?

Let's see if I can get the more basic version working first.
*/

const isOdd = (val) => val % 2 !== 0;
// console.log(isOdd(2));

function someRecursive(arr, callback) {
	if (arr.length === 0) return false;
	if (callback(arr[0]) !== true) {
		return someRecursive(arr.slice(1), callback);
	}
	return true;
}

function someRecurSolution(array, callback) {
	if (array.length === 0) return false;
	if (callback(array[0])) return true;
	return someRecurSolution(array.slice(1), callback);
}

let evenArr = [2, 4, 6, 8];
let oddArr = [2, 4, 7, 10];

// console.log(someRecursive(evenArr, isOdd));
// console.log(someRecursive(evenArr, val => val > 10));
// console.log(someRecursive(oddArr, isOdd));

/* I tentatively want to say this works. It's making me nervous because
it seemed too easy, after I got over the pitfalls of when true or false
should be returned.

And Udemy says...PASS

We're absolutely smashing these out. I expect there will still be a bit
of humility when I see the provided solutions, though, and realise I
massively overcomplicated my solutions.
*/