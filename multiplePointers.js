/* Task: Create a function that parses a sorted array of integers and
returns the first pair which equals zero in an array together, otherwise
return undefined.

Examples:
sumZero([-2,-1,0,1,2]) // returns [-3,3]
sumZero([-2, 0, 1]) // undefined
sumZero([1,2,3]) // undefined
*/

function sumZero(numArr){
    for (let i = 0; i < numArr.length; i++) {
        let len = numArr.length;
        let ind = numArr[i]
        // console.log("numArr: " + numArr[len - (1 + i)]);
        // console.log("Total: " + (ind + numArr[len - (1 + i)]));
        if(ind + (numArr[len - (1 + i)]) === 0 && i !== len - (1+i)){
            return [ind, numArr[len - (1 + i)]];
        }
    }
    return undefined;
}

// let testArr = [1,2,3,4,5];
// console.log(testArr[(testArr.length - 1)]);

// console.log(sumZero([-2, -1, 0, 1, 2])); // should return [-2, 2] PASS
// console.log(sumZero([-3, -1, 0, 1, 2])); // should return [-1, 1] PASS
// console.log(sumZero([-3, -2, 0, 1, 2])); // should return [-2, 2] FAIL
// console.log(sumZero([-4, -2, -1, 0, 1, 2])); // should return [-1, 1] FAIL
// console.log(sumZero([-2, 0, 1])); // should return undefined PASS

/* So here I was all full of piss and vinegar because not only did I create
a working solution but it was also O(n) time complexity!

This victory was short-lived however, after I realised my function only works
for so long as the array is symmetrical, that is to say the matching numbers
have to be at exact opposite points in the array, because of how I'm calculating
the second index position.

Ah well, it was nice while it lasted...*/

// O(n^2) Solution (Bad)
function sumZeroBad(arr){
    for(let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumZeroBad([-4, -2, -1, 0, 1, 2]));
// console.log(sumZeroBad([-3, -2, 0, 1, 2, 4, 5]));

/* Following an explanation of how Multiple Pointers work, I'm going to
attempt a solution on my own, first. Wish me luck... */


let testArray = [];
testArray = [1,2];
// console.log(testArray);

function sumZeroPointers(arr){
    let ind1 = 0;
    let ind2 = arr.length - 1;
    let arrSum = arr[ind1] + arr[ind2];
    let finalArray = [];
    while(finalArray.length !== 2 && ind1 !== ind2){
        if(arrSum === 0){
            finalArray = [arr[ind1], arr[ind2]];
        } else {
            if (arrSum > 0) {
                ind2 -= 1;
                arrSum = arr[ind1] + arr[ind2];
            }
            if (arrSum < 0) {
                ind1 += 1;
                arrSum = arr[ind1] + arr[ind2];
            }
        }
    }
    return finalArray.length === 2 ? finalArray : undefined;
}

console.log(sumZeroPointers([-4, -2, -1, 0, 1, 2]));
console.log(sumZeroPointers([-3, -2, 0, 1, 2, 4, 5]));
console.log(sumZeroPointers([0, 1, 2]));

// It works! I feel like I'm missing something crucial but it seems to work!

/* Below is the solution from the coursework, and I do like it better. It
uses some better methods for the while loop that cut out some unecessary stuff
I put in, but in principle it appears to work exactly the same */

function sumZeroBest(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else{
            left++;
        }
    }
}