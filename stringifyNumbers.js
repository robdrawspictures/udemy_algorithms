/*
    --- Brief ---
    Write a function called stringifyNumbers which takes in an object and finds all of
    the values which are numbers and converts them to strings. Recursion would be a
    great way to solve this!

    The exercise intends for you to create a new object with the numbers converted to
    strings, and not modify the original. Keep the original object unchanged.
*/

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
};

function stringifyNumbers(object) {
    console.log(object);
	let newObj = {...object};
	for (let key in newObj) {
		if (typeof newObj[key] === "object") {
			stringifyNumbers(newObj[key]);
		} else if (typeof newObj[key] === "number") {
			newObj[key] = newObj[key].toString();
		}
	}
    console.log('OBJECT')
    console.log(object);
    console.log('New Object')
    console.log(newObj);
	// return newObj;
}


// console.log(stringifyNumbers(obj));
stringifyNumbers(obj);

/* I just modified nestEvenSum() but it appears to work.

Spoke too soon: It seems to be very pedantic about what it means about
not modifying the original object. I think it means I have to create
a new object from scratch and build it up, rather than making a copy
of the original (personally I don't think this is clearly communicated
in the brief).

Good news and bad news: it seems to be working now, BUT for some reason
it's turning the value for the test key from an array into an object.
Oh and also the isRight key has disappeared for some reason. I give up.

UPDATE: It turns out I'd misunderstood an error I was getting previously,
but I'm still getting the error because it turns out you can't copy an object
by simply stating a new variable is that object. I had to break out my old
nemesis the spread operator, but now for some reason it's only converting
the first value into a string and ignoring the rest.

I have no idea why, so I'm going to try an alternative method (literally)...
nope, still only does the first value. I think I'm just going to look up the
solution before I get extremely angry.

Right I think I understand the problem, but not why it's only just started
happening. I think on every loop it's changing what newObj is instead of
adding to it. So when it's the return instead of the console logs it's
returning the object with the first value changed then ending.

Again, I'm not clear on why this wasn't also an issue with the version that
was directly modifying the existing object and only starts acting up with the
copy, but here we are.

To hell with this, I'm looking up the solution.
*/

function stringifyNumbersSolution(obj) {
	var newObj = {};
	for (var key in obj) {
		if (typeof obj[key] === "number") {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

/* Yeah, I was never getting this. It's basically the rewrite I attempted to
do that built up the object from scratch, but it actually works. */