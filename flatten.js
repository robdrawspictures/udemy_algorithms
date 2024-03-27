// Flatten
/* This one is well explained at least, but the examples are hilarious.

Basically the brief is to create a function that accepts and array of
arrays and returns a single, flattened array with all the values.

Let's take a look at the examples:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

Before I crack on with the function, I want to test a few hypotheses.
*/

let arr1 = [1];
let arr2 = [2, 3];
let arr3 = [4, [5, 6]];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr3));

/* Hypothesising done. My first instinct is the solution here is to
have a helper function that concatenates and index item until it can
no longer be concatenated. Maybe using typeOf to find the base case,
that being the point where the index item is not an array.

I think it might actually be easier to start by making JUST the
helper function, and pass it in an array with one item, buried inside
multiple arrays. 

UPDATE: My current roadbloack is I can't think how to strip off/drill down
through all the anciliary braces.

UPUPDATE: Got it. Solution was actually really simple, just took a bit of
lateral thinking (which Stack Overflow provided.)
*/

let helpTest = [[[[[4]]]]];
// console.log(typeof(1));
// console.log(helpTest[0]);

function helpStrip(arr) {
	console.log(arr);
	if (typeof arr[0] !== "object") return arr[0];
	return helpStrip(arr[0]);
}

// console.log(helpStrip(arr1));
// console.log(helpStrip(helpTest));

/* Right, with that out the way, I'm going to try and do a rough
version of what I want, knowing there'll be a much simpler version */

function flatten(arr) {
	// console.log(arr);
	let flatArr = [];

	if (arr.length === 0) return flatArr;

	function helpStrip(arr) {
		if (typeof arr[0] === "number" && arr.length === 1) {
			flatArr.push(arr[0]);
			return;
		} else if (typeof arr[0] === "number") {
			flatArr.push(arr[0]);
			arr = arr.slice(1);
		}
		return helpStrip(arr[0]);
	}

	helpStrip(arr);

	// flatArr = flatArr.concat(flatten(arr.slice(1)));

	return flatArr;
}

function flattenSolution(oldArr) {
	let newArr = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}

let testArr5 = [1, [2, [3, 4, [[[[5]]]]]]];
let testArr9 = [1, [2, [3, [[[[4]]]]]]];
let testArr6 = [2, [3, 4, [[[[5]]]]]];
let testArr8 = [2, [3, 4, [5]]];
let testArr7 = [1, 2, 3, 4];

// console.log(flatten(testArr5));
// console.log(flatten(testArr8));
// console.log(flatten(testArr7));
console.log(flatten(testArr9));

// console.log(testArr5.slice(1));
// console.log(testArr6.slice(1));

/* UPDATE: I am pretty sure I'm 99% of the way there
for this one, but I'm getting tripped up over
returning at the wrong time and other unnecessary baggage.

I'm tempted to just look up the result, but I feel like if
I tweak it a bit longer I might be able to hash it out.

UPUPDATE: Good news is I've now got it working with a straight
array. Bad news is it still doesn't work for the funky arrays.

*/

// console.log(testArr5);
// testArr5 = testArr5.slice(1);
// console.log(testArr5);
// testArr5 = testArr5[0].slice(1);
// console.log(testArr5);
// testArr5 = testArr5[0].slice(1);
// console.log(testArr5);
// testArr5 = testArr5.slice(1);
// console.log(testArr5);
// testArr5 = testArr5.slice(1);
// console.log(testArr5);
