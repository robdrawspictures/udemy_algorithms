/* Write a function that accepts a base and an exponent
then returns the power to the base of the exponent.

For example, 2 to the power of 2 equals 4, 3 to the power
of 4 equals 81 etc

Note: I did not know this, but apparently any number
to the power of 0 equals 1 */

function power(base, exp){
    if(exp > 1){
        console.log(base)
        base = base * base
        return power(base, (exp-1));
    }
    if(exp === 1){
        return base * base;
    }
    if(exp === 0) return 1;
}

// console.log(power(2,4));
// console.log(power(3,4));

/* I am struggling with this more than I expected, so I'm
going to try to sketch it out and see if that helps.

The way I see it, we have 2 moving parts we need to juggle,
the base number increasing, and the exponent decreasing
with each recursion. That is to say I imagine the stack
going something like this:

power(2,4);

16 * 2; exp-- from 1 to 0;
8 * 2; exp-- from 2 to 1
4 * 2; exp-- from 3 to 2
2 * 2; exp-- from 4 to 3 <-- FIRST CALL

Couple issues I see straight off, one being that it's essentially
working backwards to how previous problems have. The last call has
the final number, instead of passing back up the stack.

The second issue is negotiating the base case. I think with how it's
currently set out it will always return 1 because it will always reach
0 eventually.

Anyhoo, I'm finished for today, so I'll have a think about it tonight
and take another run at it in the morning.

I lied. I decided to work on it a bit more and I've not got a scooby 
how I did this. The good news is it works UP til the last multiplication
then it gives me an absolute batshit number.

Scratch that, it in fact does not work properly.

I might need to take another run tomorrow with the helper method approach.
*/

function powerHelper(base, exp) {
    if (exp === 0) return 1;
    let baseNum = base;

    function helper(base, exp){
        if (exp > 1) {
            console.log(baseNum);
            baseNum *= base;
            return helper(base, exp - 1);
        }
            return;
    }

    helper(base, exp);

    return baseNum;

}

// console.log(powerHelper(2, 4));
// console.log(powerHelper(3, 4));
// console.log(powerHelper(3, 0));
// console.log(powerHelper(69, 0));

/* What a difference a night's sleep makes!

I rolled it around in my head last night and came to the
conclusion that the helper method would be much easier than
pure recursion, although I'll be curious in the solutions to
see if there is a pure way of doing this.
*/

// UPDATE: There was, in fact, a pure version:
function purePower(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

/* I feel like my mistakes here stem more from my piss poor
understanding of maths than my code. Moving on... */

// Factorial
/* Write a factorial function which accepts a number
and returns the factorial of that number. In case you've
forgotten, a factorial is the product of an integer
multiplied by each integer below it.

Example, factorial five, expressed mathematically as 5!
would be calculated as 5 * 4 * 3 * 2 * 1 and equal 120.

Instinctively, I want to say we can do this one pure...
*/

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}

// Provided solution was a little different:
function udemyFactorial(x) {
	if (x < 0) return 0;
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(0));

// Product of Array
/* Write a function that takes in an array of integers and 
returns the sum of each integer. <-- WRONG

Again, this one seems straightforward enough. I have no idea
why he put the hardest one first...
*/

function productOfArray(arr){
    if(arr.length === 0) return 0;
    return arr[0] + productOfArray(arr.slice(1));
}

let arrSix = [1,2,3];
let arrSixtyNine = [10,27,32];
let arrZero = [];
let arrNeg = [-1,-2,-3];
let arrZero2 = [5,-2,-3];

// console.log(productOfArray(arrSix));
// console.log(productOfArray(arrSixtyNine));
// console.log(productOfArray(arrZero));
// console.log(productOfArray(arrZero2));
// console.log(productOfArray(arrNeg));

/* So for some reason all my tests are passing but my function
fails the tests on Udemy. Annoyingly, however, it won't show me
what tests it's actually running, only that the output doesn't
match what's expected, so it's impossible to troubleshoot.

I have had an issue like this before on CodeWars which was something
to do with the way VSC automatically cleans things up (like truncating
000 to just 0) but since I can't actually see any details of what's going
wrong there's not much I can currently do. My guess would be that the
slice method is acting differently, but I really have no idea.

I'll crack on for now and compare my solution to the one provided by the
course, see if I forgot to dot an i or cross a t somewhere. */

/* UPDATE: The provided solution for this one doesn't make sense to me at all. */
function udemyProductOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

/* Actually, looking at the examples provided in the original problem
I can see my mistake. I thought product meant ADDING all integers in
an array, but it actually means MULTIPLYING.

Kind of pissed off at this tbh, because it should have been made clearer
in the brief. These problems all make a lot of assumptions that you're
familiar with mathematical terms like range, product etc. That'd be
fine if it wasn't for the fact some explain their meaning while others
don't bother their arse.

Oh well, mea culpa still, I should have been able to tell from looking
at the examples what I was actually supposed to be doing. 

Although another point I take issue with is returning 1 on an empty array.
Presumably this is so, when we hit the base case, it doesn't return 0, but
this also means if you pass in an empty array to start with you'll get 1
back too. I don't know if this is another mathematical rule like power of
0, so maybe this is again me just not knowing shit about maths. */

// Recursive Range
/*
Write a function that accepts a number and adds every number from 0
to the one passed in.

Example 6 would be 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21
*/

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num-1);
}

// UPDATE: Udemy solution was identical.

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));
// console.log(recursiveRange(0));

// Fibonacci Finnicula
/* 
The explanation for this one was more confusing than the actual
task.

For the uninitiated (me) the Fibonacci Sequence is a sequence of
whole numbers where the following number is the sum of the 2 previous.
It goes something like this:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

The task is to create a function that, given a number, returns the
corresponding number in the Fibonacci sequence at nth position.

So fib(3) would return 2.

My gut is this will be another helper method job, but it's going to
be a little bit trickier than the power example because of the unusual
ways the number increases.
*/

function fib(num){
    if (num === 0) return 0;
    let prevNum = 0;
    let currNum = 1;

    function helper(num){
        if(num > 1){
            const newNum = currNum + prevNum;
            prevNum = currNum;
            currNum = newNum;
            helper(num-1);
        }
        return;
    }

    helper(num);

    return currNum;
}

/* I think I have the bones of the solution here, but
it might need some slight tweaking. */

console.log(fib(5));
console.log(fib(10));
console.log(fib(0));

/* Good news and bad news. The good news is the actual
process is working correctly. The bad news is it's currently
returning 1 position past where it should. 

Setting the starting point to 0 fixes that, but I have a feeling
that when I put my solution into Udemy it's going to pitch a fit.

UPDATE: It passed the test. Will wonders never cease.
*/

// UPDATE 2: The Udemy solution is MUCH better...
function udemyFib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

/* It never would have occurred to me to run two concurrent
recursive functions, and trying to follow the math for this
is hurting my head, but I am still very impressed.

Next up we have the CHALLENGING problems (emphasis theirs)
so expect a lot of irate rambling in the notes.
*/

