/* Full Disclosure: I didn't do any of the problems that invovled manipulating
objects, because I would have spent more time googling how to handle objects
than I would have writing the code.

The brief for this one was as follows: Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.

I will now attempt to annotate what I'm pretty sure this code is doing.
*/

function nestedEvenSum(obj, sum = 0) {
    /* Starter for ten: I did not realise you could iterate over an object like an array.
    I do seem to recall reading somewhere that objects are basically just rizzed up
    arrays, so this makes sense. */
	for (var key in obj) {
        /* If the type of the key is another object, start the
        process over using the object as the new entry point */
		if (typeof obj[key] === "object") {
			sum += nestedEvenSum(obj[key]);
		} 
        /* If the type of the key is a number, and it's even, add
        directly to sum */
        else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
}

/* It actually seems fairly straightforward, the only part I'm a bit fuzzy on
is line 19 using the += and the recursive function, but I suppose it will
only ever actually add to sum if it ends up in the else if part of
the function and passes the even number check.

I probably couldn't have come up with such an elegant solution, but I'm now
fairly confident I could have solved this myself. At least I learned a bit
about object manipulation. */