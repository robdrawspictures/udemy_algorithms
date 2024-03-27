/* Task: Create a function that takes two arrays and
returns true if the values of the second array match
the squared values of the first.

The values don't have to be in corresponding order,
but they all have to be present and the frequency of
values has to be the same.

Examples:
same([1,2,3], [4,9,1]) - true
same([1,2,3], [1,4,4,9]) - false
same([1,2,3], [4,9]) - false
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    squaredArr = 0
    for (let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i] ** 2)){
            squaredArr++
        }
    }
    return squaredArr === arr1.length
}

/*
console.log(same([1,2,3], [4,1,9])); // true
console.log(same([3,1,2], [1,4,9])); // true
console.log(same([3,1,2,3], [1,4,9,9])); // true
console.log(same([3,1,2,3], [1,4,9])); // false
console.log(same([3,1,2], [1,4,3])); // false
console.log(same([1,2,3], [4,4,9])); // false
console.log(same([1,2,3], [4,1,9,1])); // false
console.log(same([1,2,3], [4,1])); // false
*/

// This seems to be working but I'm sure there's a problematic variation I'm missing...

/* ...this concludes our good news however, because the time complexity is O(n^2),
courtesy of the nested loops.

Thankfully the course has provided the superior version, which I am going to attempt
to annotate... */

function sameSuperior(arr1, arr2){
    // Starts off the same as mine, makes sense
    if (arr1.length !== arr2.length) {
        return false;
    }
    /* I have no idea what's going on here. Logging out the objects,
    I get that each key is a number from the arrays but the values are
    all 1 and I don't understand how.
    
    More specifically, I don't get the point of lines 69 & 72, and
    why you wouldn't just set the value to 1 since the keys are
    all we care about.
    
    UPDATE: I am a dumbo, the value actually does matter. It's
    actually showing how many times each number appears in the array
    but because the test I used only had each number once it's
    all 1.
    
    That's what the OR is for in 73 & 76, although I've never seen
    this done before. I think this is a very shorthand if statement
    where if the key already exists in freqCount1 with the given val
    then increment by one, otherwise it's 0 and add 1 for the
    first occurrence*/
    let freqCount1 = {};
    let freqCount2 = {};
    for(let val of arr1){
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for(let val of arr2){
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    console.log(freqCount1);
    console.log(freqCount2);
    for(let key in freqCount1){
        // If the key squared isn't in freqCount 2, game over
        if(!(key ** 2 in freqCount2)){
            return false;
        }
        /* This part really confused me until I realised we're
        not comparing the keys here, but the values.
        
        We can only get here if we've already confirmed there
        is a matching key in freqCount2 for freqCount1's key
        squared.
        
        Now we're checking the VALUES of those matching keys
        are equal to each other. In other words, do the numbers
        corresponding to the keys also appear at the same frequency
        in both arrays.
        
        So for example, at this stage an array like [1,1,2,4] would
        fail against [1,4,4,16] because even though the objects would
        have matching KEYS (1,2,4 ** 2 and 1,4,16 respectively) the
        VALUES of those keys would not match up, so we return false. */
        if(freqCount2[key ** 2] !== freqCount1[key]){
            return false;
        }
    }
    // If all checks pass then return true
    return true;
}

/* Conclusion: On the face of it this function looks absolutely unwieldy and far
less efficient than my attempt, with 3 for loops and 3 if statements versus my
2 for loops and 2 if statements.

This is the devious trap of Big O notation, because even if your code is more
compact and appears to be doing less on the surface, HOW you use those loops
is what actually defines time complexity.

All the for loops in the superior example are flat, meaning each only has to
run as many times as the size of the array, for O(n). Meanwhile my function
used nested loops, meaning the 2nd for loop was iterating over every number
in the 2nd array for EACH number in the 1st array.

In simple terms, if the array contains 100 numbers, then the for loop runs
100 times for the first 2 for loops in the superior function, then as many
times in the 3rd for loop for however many unique numbers you had. Final
tally comes in at <300 iterations.

Meanwhile in my function with the same array, the initial for loop is running
100 times, BUT the for loop inside it is iterating potentially 100 times
for EACH loop, resulting in a potential 10,000 iterations. This is a time
complexity of O(n^2) and should be avoided at all costs.

It's also worth remembering that accessing objects works differently to
arrays: Javascript doesn't have to iterate over and object to find a key
the way it does to find a value in an array; if the key exists it is
found isntantly.*/

// console.log(sameSuperior([1,2,3], [4,1,9])); // true
// console.log(sameSuperior([3,1,2], [1,4,9])); // true
console.log(sameSuperior([3,1,2,3], [1,4,9,9])); // true
// console.log(sameSuperior([3,1,2,3], [1,4,9])); // false
// console.log(sameSuperior([3,1,2], [1,4,3])); // false
// console.log(sameSuperior([1,2,3], [4,4,9])); // false
// console.log(sameSuperior([1,2,3], [4,1,9,1])); // false
// console.log(sameSuperior([1,2,3], [4,1])); // false


// Clean version for testing in the Big O Calculator
// function sameSuperior(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	let freqCount1 = {};
// 	let freqCount2 = {};
// 	for (let val of arr1) {
// 		freqCount1[val] = (freqCount1[val] || 0) + 1;
// 	}
// 	for (let val of arr2) {
// 		freqCount2[val] = (freqCount2[val] || 0) + 1;
// 	}
// 	console.log(freqCount1);
// 	console.log(freqCount2);
// 	for (let key in freqCount1) {
// 		if (!(key ** 2 in freqCount2)) {
// 			return false;
// 		}
// 		if (freqCount2[key ** 2] !== freqCount1[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }