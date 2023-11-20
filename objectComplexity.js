let instructor = {
    firstName: "Griffith",
    didNothingWrong: true,
    favoriteNumbers: [1,2,3,4]
};

/*
--- Big O of Objects ---

Insertion - O(1)
Removal - O(1)
Access - O(1)
Searching - O(N)

Conclusion: Because there is no ordering to objects (at least as far as JS is concerned,)
insertion, removal, and access have a constant O, as you point directly to them to interact.

Searching, on the other hand, has an O(1), because how long it takes will depend on how many
key-value pairs are stored inside the object.

--- Big O of Object Methods ---

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

This seemed counterintuitive to me, but because hasOwnProperty only returns a boolean to
confirm or deny the property exists, it's basically on par with access; it's just looking
at the data but not actually doing anything with it, as opposed to searching through the
keys and checking for a specific value, or how the other object methods have to create
and return at least one array.
*/