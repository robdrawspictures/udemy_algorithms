/* Note: I am very confused why this problem came after the capitalising first
letters one, because this seems way more straightforward.

No doubt I am missing some trick that is going to absolutely body me in the
solutions. */

function capitaliseWords(arr) {
    let capArr = [];

    function capitalise(arr) {
        if (arr.length !== 0) {
            capArr.push(arr[0].toUpperCase());
            capitalise(arr.slice(1));
        }
    }

    capitalise(arr);
    return capArr;
}

const testArr1 = ['wake', 'up'];
const testArr2 = ['grab', 'a', 'brush', 'and', 'put', 'a', 'little', 'make-up'];

console.log(capitaliseWords(testArr1));
console.log(capitaliseWords(testArr2));

/* UPDATE: Now I'm at the solutions I see the issue: this challenge was meant
to be first. */

function capitalizeWordsSolution(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWordsSolution(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}

/* I'll be honest, I like my solution better. This one takes fewer lines of code
but I don't think it's remotely clear what it's actually doing. 

I ran both solutions through the Big O Calc and they each had a time and space
complexity of O(n) so I see no reason not to prefer my version. */