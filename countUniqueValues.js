/* Task: Create a function that counts the unique values in an array.

The array can contain negative numbers but will always be sorted
in order from lowest to highest. */

// function countUniqueValues(arr){
//     if(arr.length === 0){
//         return 0;
//     }
//     let uniqueArr = [arr[0]];
//     let ind1 = 0;
//     let ind2 = 1;
//     let itCount = 0
//     while(itCount < arr.length){
//         if(arr[ind1] - arr[ind2] === 0){
//             ind1 += 2;
//             ind2 += 2;
//             itCount++;
//         } else {
//             uniqueArr.push(arr[ind2]);
//             itCount++;
//         }
//     }
//     return uniqueArr.length;
// }

/* I have zero faith that this is going to work. I think I could complete the task
ordinarily (although maybe not at O(n)), but because I'm trying to use multiple
pointers that both start at the left side I'm not entirely sure how I should
be tackling this.

In theory, I think I'm kind of doing the right thing. Maybe. Probably not. */

// console.log(countUniqueValues([1,1,1,1,1,2])); // Should return 2; returns 5 LMAO

/* Following this resounding failure I've realised that nothing about my approach
works. Let's see the actual strat... 

Right, with a little explanation for how I'm supposed to use these pointers I have
a much better idea what to do. Let's try again! */

function countUniqueValues(arr) {
	if (arr.length === 0) {
        // console.log('YOU DIED');
		return 0;
	}
    let i = 0
	let j = 1;
	let itCount = 0;
    while(itCount < arr.length - 1){
        if (arr[i] === arr[j]){
            j++;
            itCount++;
            // console.log('COUNT: ' + itCount);
        } else if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
            j++;
            itCount++;
            // console.log("COUNT: " + itCount);
        }
    }
    // console.log(arr);
    return i + 1;
}

// I still don't think this is going to work, but it's maybe closer?

console.log(countUniqueValues([1,1,1,1,2,3])); // Should return 3 PASS
console.log(countUniqueValues([-5,-5,-1,0,1,1,2,3,10])); // Should return 7
console.log(countUniqueValues([])); // Should return 0 PASS

/* So at first it didn't work because I'm a dumbass and I was re-assigning values
in the array as the index position instead of that positions current value.

NOW it seems to be working perfectly, at least from what little testing I've
done. We'll see how it compares to the official solution... */

function countUniqueValuesUdemy(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValuesUdemy([-5,-5,-1,0,1,1,2,3,10])); // Should return 7
console.log(countUniqueValuesUdemy([])); // Should return 0