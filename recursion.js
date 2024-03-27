/* Recursion is a function that calls itself.

In almost all programming languages, there is a built-in
data structure that manages what happens when functions
are invoked. This is known as the Call Stack.

When a function is invoked it is placed (pushed) to the
top of the call stack.

When JS sees the return keyword or the function concludes,
the compiler will remove the function from the stack (pop).

*/

// Basic Call Stack Example
function takeShower(){
    return "Getting sudsy!";
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    takeShower();
    eatBreakfast();
    console.log("Now I am become death, destroyer of worlds.");
}

// wakeUp();

/* The difference between a recursive and regular function is that,
while a regular function will be added to the stack then removed
once it has run, recursive functions will keep pushing new functions
to the stack until the job is done.

So, in the above example, when wakeUp() is executed, it will be added
to, and remain in, the call stack until takeShower(), eatBreakfast()
and cookFood() have completed and been popped from the stack.

Similarly, eatBreakfast() will remain in stack until cookFood() has
completed. 

In short, a regular function is one and done; a recursive function
has a domino effect, triggering other functions (and sometimes itself)
until the task is complete.
*/

// Base Case
/* The base case refers to the condition upon which a recursive
function terminates.

This is a core principle of recursive functions, as obviously
without it you run the risk of an infinite recursion loop. 
*/

// Recursive Input
/* I made that term up, but basically this refers to whatever
you are using the function for that requires it to be
called again and again, changing the parameter each time. 
*/

/* Basic Recursive Function */
function countDown(num) { 
    // Base Case: num is equal to or less than zero
    if(num <= 0 ){
        console.log("Lift off!")
        return;
    }
    console.log(num);
    // Recursive Input: after logging the current num,
    // reduce by one and supply it to the function again
    num--
    countDown(num);
}

// countDown(10);

// Of course, this could also be expressed as:
function countDownLoop(num){
    for(let i = num; i > 0; i--){
        console.log(i);
    }
    console.log("Lift off!");
}

/* So why bother with recursion? Because it can get much
more complicated, and we're all about saving time and
complexity, remember. */

// Moderately more complicated recursion
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.log(sumRange(2));
// console.log(sumRange(5));

/* This melted my brain, at first, until I understood the point
of the function, and even after that I was still confused at
HOW it was doing what it was doing.

Basically, the above function totals all numbers in a range from
1 - num. So, if you provide 2 as the paramter on line 103, you will
get 3 (1+2) and if you provide 5 as on line 104, you will get
15 (1+2+3+4+5) 

What was really throwing me was how JS was keeping track of the running
total. With a normal function, you'd declare a variable set at 0 and
use += to increment it as you decreased the starting number. 

Something like...*/

function sumRangeBasic(num){
    let total = 0;

    while(num > 0){
        total += num;
        num--;
    }

    return total;
}

// console.log(sumRangeBasic(5));

/* With the recursive version, though, that running total is
being held in the Call Stack, as each call of the function
is waiting on getting its response. It can be visualised
something like this (remember the Call Stack places the most
recent call at the top): 

sumRange(1): Return 1;
sumRange(2): Awaiting 2 + sumRange(1);
sumRange(3): Awaiting 3 + sumRange(2);
sumRange(4): Awaiting 4 + sumRange(3);
sumRange(5): Awaiting 5 + sumRange(4); <-- FIRST CALL

So upon the sumRange call at line 140 completing, it triggers a
domino effect back down the stack like this:

sumRange(1): Return 1;
sumRange(2): Return 2 + 1;
sumRange(3): Return 3 + 3;
sumRange(4): Return 4 + 6;
sumRange(5): Return 5 + 10;
*/

/* For the sake of practice, we'll now do the same thing for
a factorial calculation, which I'm lead to believe is the
process of multiplying a bunch of numbers instead of adding
them. */

// Factorial Iterative Function
function iterativeFactorial(num){
    let total = 1
    for (let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

// console.log(iterativeFactorial(2));
// console.log(iterativeFactorial(3));
// console.log(iterativeFactorial(4));

/* So, just to be clear on what's happening here,
I'll break these down:

iterativeFactorial(2): 2 * 1 = 2
iterativeFactorial(3): (3 * 1) * 2 = 6
iterativeFactorial(4): ((4 * 1) * 3) * 2 = 24

I will now attempt to write the recursive version without
using the video to help...
*/

// Factorial Recursive Function
function recursiveFactorial(num){
    if (num === 1) return 1;
    return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(2));
// console.log(recursiveFactorial(3));
// console.log(recursiveFactorial(4));

// Common Pitfalls
/* The most common pitfall when dealing with recursive functions
is forgetting to include a base case. In other words triggering
an infinite recursion.

This will generally trigger an error when the call stack size is
exceeded (Fun Fact: this is the etymological origin of Stack Overflow).

Another easy mistake to make is forgetting to modify the recursive
input. For example something like:

function recursiveFactorial(num){
    if (num === 1) return 1;
    return num * recursiveFactorial(num);
}

Even though we have a base case here, because the recursive input
on line 208 isn't altering the parameter, unless 1 is initially
passed in we will never hit the base case, and again be stuck
in an infinite loop.

In short, a good rule of thumb when dealing with recursion is to
always make sure there is a path for your function to end, in
every instance.
*/

/* For the purposes of consolidating my learning for this section,
I'm now going to attempt to make a recursive function which
satisfies the original problem presented in the course: take
an array of numbers and return true or false if any are odd. */

// Odd Number Check (Recursive)
function oddNumberRecursive(arr){
    if(arr.length === 0) return 'No odd numbers found.';
    else if(arr[0] % 2 !== 0) return `${arr[0]} is odd.`;
    arr.shift()
    return oddNumberRecursive(arr);
}

let oddArr = [22, 44, 73, 66]
let evenArr = [22, 44, 88, 66]
let oddArr2 = [222, 446, 738, 669]
let evenArr2 = [222, 444, 888, 666]
// console.log(oddNumberRecursive(oddArr))
// console.log(oddNumberRecursive(evenArr))
// console.log(oddNumberRecursive(oddArr2))
// console.log(oddNumberRecursive(evenArr2))

/* It all looks good! Next up, I want to make the same function
in an iterative way and then chuck the two into that complexity
tester thing I have to see if there's any actual difference
in how the code performs. */

// Odd Number Check (Iterative)
function oddNumberIterative(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) return `${arr[i]} is odd.`;
    }
    return 'No odd numbers found.';
}

console.log(oddNumberIterative(oddArr));
console.log(oddNumberIterative(evenArr));
console.log(oddNumberIterative(oddArr2));
console.log(oddNumberIterative(evenArr2));

/* 

That one also seems to work just dandy, time to compare...

Recursive:
Time Complexity: O(n)
Space Complexity: O(n)

Iterative:
Time Complexity: O(n)
Space Complexity: O(1)

So there is a difference in Space Complexity, but I'm not
sure which is actually preferrable.

*/