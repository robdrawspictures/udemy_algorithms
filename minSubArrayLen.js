
/* Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray
of which the sum is greater than or equal to the integer passed to the
function. If there isn't one, return 0 instead. */

/* Provided Solution */
function minSubArrayLen(nums, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

/* My Garbage Attempt */
// function minSubArrayLen(arr, num){
//     const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
//     if(sum < num){
//         return 0
//     }
//     for(let i = 0; i < arr.length ; i++){
//         let tempSum = 0;
//         if(arr[i] >= num){
//             return 1;
//         }
//         else if ((arr[i] + arr[i+1]) <= num){
//             tempSum += arr[i] + arr[i + 1];
//         }
//     }
//     for(let i = 0; i < arr.length ; i++){
//         let tempSum = 0;
//         if ((arr[i] + arr[i+1]) <= num){
//             tempSum += arr[i] + arr[i + 1];
//         }
//         else if (tempSum === num)
//     }
// }