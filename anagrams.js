/* Following on from the frequency counter exercise, create a function
that tests whether 2 provided strings are anagrams of each other. 

Note: For the purposes of this exercise, assume all arguments will
be single, lowercase words or empty strings */

function isAnagram(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
	if (arr1.length !== arr2.length) {
		return false;
	}
	let freqCount1 = {};
	let freqCount2 = {};
	for (let val of arr1) {
		freqCount1[val] = (freqCount1[val] || 0) + 1;
	}
	for (let val of arr2) {
		freqCount2[val] = (freqCount2[val] || 0) + 1;
	}
	console.log(freqCount1);
	console.log(freqCount2);
	for (let key in freqCount1) {
		if (!(key in freqCount2)) {
			return false;
		}
		if (freqCount2[key] !== freqCount1[key]) {
			return false;
		}
	}
	return true;
}

let testStr = 'test';
console.log(testStr.split(''));
console.log(testStr[2]);
// console.log(isAnagram('dog', 'god')); // true
// console.log(isAnagram('dog', 'goo')); // false
// console.log(isAnagram('doggo', 'goddo')); // false
// console.log(isAnagram('doggo', 'goddess')); // false
// console.log(isAnagram('staple', 'plates')); // true
// console.log(isAnagram('sneed', 'chuck')); // false
// console.log(isAnagram('', '')); // true

/* UPDATE: I have been ruse cruised! I just copied and tweaked the previous
example without really considering the differences between the two objectives
and it turns out that, while my function works, it's more complicated
than it needs to be.

I completely forgot that you can actually iterate over a string just
like an array, so there's no need to use the split method in order to
create the object.

Below follows the much more elegant solution. */

function validAnagram(str1, str2){
    // First note: length method works on strings, as is
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if the key already exists, incremenet, else create new pair with value 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if letter doesn't exist in the first word, game over
        if (!lookup[letter]){
            return false;
        } else {
            /* this part is confusing me, because I don't see how it is checking
            the correct number of a given character exists, it's just decrementing
            the existing counter. */
            lookup[letter] -= 1;
            console.log(lookup);
        }
    }
    return true
}

console.log(validAnagram('abara', 'araba')); // true
console.log(validAnagram('abara', 'abrra')); // false

const testObj = {
    'a': 1,
    'b': 2,
    'c': 0,
}

console.log(!testObj['d']); // returns true, because it doesn't exist
console.log(!testObj['c']); // returns true, because value is 0
console.log(!testObj['b']); // returns false, because it exists
console.log(testObj['c']); // returns 0, because it's the value

/* So after a bit of experimentation I discovered something interesting about
objects. Using !lookup[X] doesn't just return true if no such key exists,
but ALSO if its value is set to 0.

The mystery of the decrement is solved! */