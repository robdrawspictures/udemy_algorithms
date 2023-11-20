/* The below examples are for a function designed to take a sorted
array and return the index position of the desired value. */

// Time Complexity O(N)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val){
            return i;
        }
    }

    return -1;
}

// Time Complexity Log(N)
function binarySearch(arr, val) {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

/*
At first glance it wasn't obvious to me how the binary search method was more efficient.
I understood everything the code was doing, but I didn't understand why this approach was
better until I considered scale.

Say you have an array of 1-5, and the value you are looking for is 1. The linearSearch() will
finish almost instantly; exremely efficient. The binarySearch() might actually take slightly
longer in that case, because it has more steps to reach that number.

Instead, though, imagine an array of 1-1,000,000 and the number you are looking for is
999,999. Now you have to go through almost a million iterations of the linearSearch() loop
but the binarySearch() is set up in such a way that with each loop it discards half the
current pool of possible numbers.

To put it more clearly, in the first loop it will determine that currentElement (500,000) is
less than val(999,999), so min(0) will now become min(500,001).

On the next loop, the new middle/currentElement will become 750,000, still less than val
so the new min is 750,001.

Next loop: New middle/currentElement is 875,000. Still less, the process repeats.

I'll stop there, but the point is you can see that with only 3 loops we've already narrowed
it down to the back end of the array, compared to the 875,000 loops the linear search
would have required.

I guess this is what they mean when they talk about the scalability of good code. */