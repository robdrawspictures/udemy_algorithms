// Example of an O(n) function
function countUpAndDown(n){
    console.log("The fire rises!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("Reached the top and had to stop, that's what's botherin me.");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("I've hit rock bottom. Goodbye cruel world.");
}

// Because the function executes two for loops one after the other, the time to run will increase based on n

// countUpAndDown(10);

// Example of O(n²)
function printAllPairs(n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}

// Because the function executes one for loop inside another, the time to run will increase based on n * n

// printAllPairs(5);

// Example of O(n), the cost of the function increases with the size of n
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(3);
logAtLeast5(9);

// Example of the constant O(1); the cost of the function has a hard ceiling because the loop will never execute more than 5 times, regardless of n
function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

logAtMost5(3);
logAtMost5(9);