/* Helper method recursion refers to a type of recursion wherein
the recursive function exists within and is called be an
over-arching function. */

// Helper Method Example
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput){
        if (helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return `Array contains ${result.length} odd numbers.`;
}

let multiOddArr = [2, 3, 420, 69, 2701, 88]
let evenArr = [2, 4, 6, 8, 420]
console.log(collectOddValues(multiOddArr));
console.log(collectOddValues(evenArr));