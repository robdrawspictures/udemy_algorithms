/* Pure Recursion works similar to Helper Method Recursion, but
rather than relying on nested functions it contains everything
within the one recursive function.

How does it do that? I guess we're about to find out...
*/

// Pure Recursive Odd Number Collector
function collectOddValues(arr){
    let result = [];

    if(arr.length === 0){
        return result;
    }

    if(arr[0] % 2 !== 0){
        result.push(arr[0]);
    }

    result = result.concat(collectOddValues(arr.slice(1)));
    return result;
}

let multiOddArr = [2, 3, 420, 69, 2701, 88];
let evenArr = [2, 4, 6, 8, 420];
console.log(collectOddValues(multiOddArr));
console.log(collectOddValues(evenArr));

/* This is a good bit more confusing than the helper version,
but if you know what concat() does it's actually very similar
to the sumRange stuff we did before.

It can be visualised like this, using multiOddArr, as an example:

Array empty, so return [] <-- BASE CASE
88 is even, so [].concat(collectOddValues([]))
2701 is odd, so [2701].concat(collectOddValues([88]))
69 is odd, so [69].concat(collectOddValues([2701,88]))
420 is even, so [].concat(collectOddValues([69,2701,88]))
3 is odd, so [3].concat(collectOddValues([420,69,2701,88]))
2 is even, so [].concat(collectOddValues([3,420, 69, 2701, 88])) <-- FIRST CALL

So now that we've hit our base case, the ripple heads back up
the stack, and would look something like this:

[].concat([3].concat([].concat([69].concat([2701].concat([].concat([])))))

I might have missed a bracket here or there, but hopefully it still
makes sense.

One note in the video is that you shoud prefer methods like slice, the spread
operator and concat which make copies of the arrays, as opposed to things like
pop and push, presumably, which mutate them. This means I probably shouldn't
used shift for one of my solutions, but I don't actually know whether that
copies or mutates.
*/