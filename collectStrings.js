/*
    --- Brief ---
    Write a function called collectStrings which accepts an object and returns an
    array of all the values in the object that have a typeof string.

*/

const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz",
					},
				},
			},
		},
	},
};

function collectStrings(object){
    let strArr = [];
    
    function stringHelper(obj){
        for(let key in obj){
            if (typeof obj[key] === "string") {
                strArr.push(obj[key]);
            } else if (typeof obj[key] === "object") {
                return stringHelper(obj[key]);
            }
        }
    }

    stringHelper(object);

    return strArr;
}

console.log(collectStrings(obj));

/* I got really close with this one. I was having an issue with the push()
always wiping the array so I only ever got the last string back, and tbh
I still don't understand why that was happening.

Then I tried encapsulating the for loop inside a helper function, but it
didn't work until I looked at the solution and it had the if-else switched
around. What I don't get is why the original if-else I had worked for
nestedEvenSum but not this.

All in all, these have been every bit as annoying as I expected, I am glad
they are done. */

function collectStringsPureRecursion(obj) {
	var stringsArr = [];
	for (var key in obj) {
		if (typeof obj[key] === "string") {
			stringsArr.push(obj[key]);
		} else if (typeof obj[key] === "object") {
			stringsArr = stringsArr.concat(collectStrings(obj[key]));
		}
	}

	return stringsArr;
}

/* This is really annoying. I THOUGHT of using concat() but I didn't think
it would work, for some reason. Oh well, good to know. */