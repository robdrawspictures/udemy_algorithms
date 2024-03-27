// Frequency Counter - same frequency
function splitInt(num) {
    let strArr = num.toString().split('');
    let numArr = strArr.map(num => parseInt(num));

    return numArr;
}

function sameFrequency(num1, num2) {
    const arr1 = splitInt(num1);
    const arr2 = splitInt(num2);

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

    for (let key in freqCount1) {
        // If the key squared isn't in freqCount 2, game over
        if (!(key in freqCount2)) {
            return false;
        }
        if (freqCount2[key] !== freqCount1[key]) {
            return false;
        }
    }

    // If all checks pass then return true
    return true;
}

// console.log(sameFrequency(128, 281));

// Multiple Pointers: Are there duplicates?

function areThereDuplicates(...args){
        let left = 0;
		let right = args.length - 1;

		while (left < right) {
			if (args[left] === args[right]) {
				return true;
			} else {
				left++;
			}
		} 

        return false;
}

// console.log(areThereDuplicates(1,2,3,4));
// console.log(areThereDuplicates('a','b','c','b'));
// console.log(areThereDuplicates(1,2,3,4,5,2));

// Course Answers: 

function sameFrequencySuperior(num1, num2) {
	let strNum1 = num1.toString();
	let strNum2 = num2.toString();
	if (strNum1.length !== strNum2.length) return false;

	let countNum1 = {};
	let countNum2 = {};

	for (let i = 0; i < strNum1.length; i++) {
		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
	}

	for (let j = 0; j < strNum1.length; j++) {
		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
	}

	for (let key in countNum1) {
		if (countNum1[key] !== countNum2[key]) return false;
	}

	return true;
}

function areThereDuplicatesFrequencyCounter() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}

function areThereDuplicatesMultiplePointers(...args) {
	args.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

/* Right, this one really fucked me up until I thought it through. I initially had
my answer set up the same (because I just modified a previous example) but I thought
I couldn't move both pointers at once because then I'd never find a match, because
my second pointer was at the end of the array, moving inward.

This solution works because of the sort method at the start, and because the second pointer
is immediately after the first.

So, in the case of a sorted array of arguments like [1,2,2,3,4] if index 0 and 1
don't match, then you can guarantee index 0 matches nothing else in the array, so
it's safe to discard. 

Another takeaway from this is that apparently the sort method works on letters too. You'd
think I would have known this since I used it in my tech task, but now I actually understand
what it was doing there...it seems each letter is assigned a numerical value and then
it's sorted like any other number array.*/

let alphaArr = ['s', 'n', 'e', 'e', 'd'];
alphaArr.sort((x,y) => {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0
})

// console.log(alphaArr);
// console.log(sortedArr);

/* Something else I've learned is apparently running sort() on an array actually re-arranges
the original array. I should probably look into a way of preventing this (spread operator,
would be my guess). */

// And finally...

function areThereDuplicatesUltraInstinct() {
	return new Set(arguments).size !== arguments.length;
}

// ROUND 2
// Multiple Pointers - Average Pair

/* Write a function which, given a sorted array of integers and a target average, returns
true or false based on whether or not any pair of numbers in the array meet that average.

There may be more than one pair which matches the target. */

function averagePair(arr, avg) {
    if(arr.length <= 1 || arr[arr.length - 1] < avg){
        return false;
    }

    let start = 0;
    let last = arr.length - 1;

    while (start < last){
    let middle = Math.floor((start + last) / 2);
    let currentElement = arr[middle];

    if((currentElement + arr[last]) / 2 > avg) {
        last--;
    }
    if((currentElement + arr[last]) / 2 < avg) {
        start++;
    }
    if((currentElement + arr[last]) / 2 === avg)
        return true;
    }
    
    return false;

}

// console.log(averagePair([1,2,3], 2.5));
// console.log(averagePair([1,2,2,3], 2));
// console.log(averagePair([1,1,2,2,3], 3));
// console.log(averagePair([1,1,2,2,3], 9));

// The above somehow works and I don't know if it's actually a valid solution or just pure luck
// I haven't managed to think of an array/avg combo to break it.

// Multiple Pointers - Subsequence

/* Create a function which takes two strings and checks whether the cahracters in the first string
form a subsequence of the characters in the second string. In laymans terms, find out if the characters
appear anywhere in the second string without their order changing.

Acceptable: ('apt', 'apartment')
Unacceptable: ('tab', 'batman')
 */

function isSubsequence(str1, str2){
    let start = 0;

    while(start <= (str1.length - 1)){
        for(let i = 0; i < str2.length; i++){
            if(str1[start] === str2[i]){
                start++;
            }
        }

        console.log(start);
        return true;
    }

    return false;

}

console.log(isSubsequence('abc', 'abacus'));
console.log(isSubsequence('cat', 'dwindle'));

// let str1 = 'abc';
// let str2 = 'abacus';

// console.log(str1[1]);
// console.log(str2[3]);
// console.log(str2.length);