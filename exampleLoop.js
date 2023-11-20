function addUpTo(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }

    return total;
}

function addUpToRemastered(n) {
    return n * (n + 1) / 2;
}

const t1 = performance.now();
addUpTo(1000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
const t3 = performance.now();
addUpToRemastered(1000000);
const t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);