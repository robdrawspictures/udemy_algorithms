/* I am pretty sure that this exercise is actually what caused
me to look up a course on algorithms in the first place...

Anyway! The task here is to create a function which takes an array
and number as parameters, then calculate the maximum sum of consecutive
numbers in the array based on the number passed in.

So, for example, if you have [1,3,1,4] and n of 2, the largest sum you
can make is 5, from the last 2 numbers in the array. Doing this with an
n <= 2 is fairly easy, but once you go above that the moving parts start
to get tricky to keep track of.

I don't think I'll be able to do this without looking up the solution, but
I'll give it a go. */

// function maxArraySubSum(arr, n){
//     let bigSum = 0;
//     for (let i = 0; i < arr.length; i++){
//         let j = i+1;
//         if (arr[i] + arr[j] > bigSum){
//             bigSum = arr[i] + arr[j];
//         }
//     }
//     return bigSum;
// }

// console.log(maxArraySubSum([1,2,3,4], 2)) // expect 7 PASS
// console.log(maxArraySubSum([2,8,3,7], 2)) // expect 11 PASS
// console.log(maxArraySubSum([2,8,3,7,6,1], 2)) // expect 13 PASS

/* SO. At first glance this all seems kosher. The problems start
when we attempt to increase n (for now we'll ignore that the function
also can't handle a single n <= 1). */

// console.log(maxArraySubSum([1, 2, 3, 4], 3)); // expect 9 FAIL

/* Game's a bogey. I can fix the problem with the j index, but the only
way I can think to add all the numbers between i and j is another for loop,
which will increase the time complexity. 

Let's give it a go anyway... */

function maxArraySubSum(arr, n) {
	let bigSum = 0;
	for (let i = 0; i < arr.length; i++) {
		let j = i + (n - 1);
        let k = i;
        let currSum = 0;
        while(k <= j){
            currSum += arr[k];
            k++;
        }
		if (currSum > bigSum) {
			bigSum = currSum;
		}
	}
	return bigSum;
}

console.log(maxArraySubSum([1,2,3,4], 2)) // expect 7 PASS
console.log(maxArraySubSum([2,8,3,7], 2)) // expect 11 PASS
console.log(maxArraySubSum([2,8,3,7,6,1], 2)) // expect 13 PASS
console.log(maxArraySubSum([1, 2, 3, 4], 3)); // expect 9 PASS
console.log(maxArraySubSum([1, 2, 4, 2, 3, 1, 10], 3)); // expect 14 PASS
console.log(maxArraySubSum([10, 1, 1, 2, 7, 1, 4, 1, 9], 4)); // expect 15 PASS

/* Holy shit I think I actually did it. All my tests pass and I can't think of
any curve balls I could through (again ignoring n <= 1). 

I just need to check this for Big O...yeah it's O(n^2). I wasn't sure if the
while loop would count, but obviously it does.

Well, on the plus side I'm just happy I was able to make the function work! Now
let's see the O(n) way to do things... */

function maxSubArraySumBad(arr, num){
    if (num > arr.length){
        return null;
    }
    // This is to factor in an array of all negative numbers
    let max = -Infinity;
    // This is to factor in not trying to add numbers past the end of the array
    // So i's final position will always leave n - 1 digits ahead of it
    for (let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

/* So aside from the notes I added this is mostly just the same method I used but
phrased differently. */

function maxSubArraySumBestBoy(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    // Initial for loop creates total from 0 to n - 1
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // See notes below
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        // updates maxSum if tempSum is bigger
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

/* I wanted to break this into a bigger note because it's going to take
some explaining. This second for loop is the one passing over the entire
array, and as it does so it's altering tempSum (which was previously set
to match the maxSum derived from the first for loop) to subtract the previous
number and add on the next in line.

To help visualise this, if we have an array, with n = 3:
[1,2,3,4,5,6]

Then the first for loop is starting at index 0 and ending at index 2
(n - 1 or i < n) meaning both maxSum and tempSum are set to 6:
1 + 2 + 3 = 6

For the next loop is where things get clever, because rather than bumping
everything up one and doing:
2 + 3 + 4 = 9

We use a single index number to subtract the previous first number and
add the new last one, like this:
6 - 1 + 4 = 9

In terms of the actual calculation it's not much extra work, the difference
is that because we only need a single index positon to do this, we only need
to loop over the array a single time, rather than iterating the index forward
then adding up the new subset of numbers every time. Because only the first and
last numbers in the subset ever change, that's all we need to care about.

That's how we end up with O(n) instead of O(n^2).

The only part I'm still not 100% clear on is why the for at line 109 is starting
at index n instead of 0. I mean, I know WHY, it's just hard to wrap my head
around, logistically.
*/