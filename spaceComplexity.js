/* Where time complexity refers to the number of operations an action requires, space complexity
deals with the size elements of a function take up.

For example, an integer has space complexity of O(1) regardless of its size, whereas a string
has space complexity of 0(n) dependent on the number of characters in it. */

// Example of space O(1), because regardless of array size, the number of variables reamins constant
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++ ) {
        total += arr[i];
    }
    return total;
}

/* Example of O(n) space. Even though the number of variables is constant, each item in an array increases
the space that array occupies, so space complexity will be dependent on the size of the array passed in. */
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

