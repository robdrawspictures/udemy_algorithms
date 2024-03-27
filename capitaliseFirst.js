function capitaliseFirst(arr) {
	let capArr = [];

	function helper(str) {
		let arr = str.split("");
		arr[0] = arr[0].toUpperCase();
		return arr.join("");
	}

	function capitalise(arr) {
		if (arr.length !== 0) {
			let capWord = helper(arr[0]);
			capArr.push(capWord);
			capitalise(arr.slice(1));
		}
	}

	capitalise(arr);
	return capArr;
}

const testArr1 = ["sneed", "seed", "feed"];
const testArr2 = [];
console.log(capitaliseFirst(testArr1));
console.log(capitaliseFirst(testArr2));