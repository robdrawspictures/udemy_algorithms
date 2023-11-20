let names = ["Guts", "Griffith", "Casca"];
let values = [true, {}, [], "fr fr no cap on god"];

/*
--- Big O of Arrays ---
Insertion - O(1) if end of array, O(N) if re-indexing required *
Removal - O(1) if end of array, O(N) if re-indexing required
Searching - O(N)
Access - O(1)

* - Array insertion can have varying Big O, depending on where you are
doing the inserting (OO, MATRON). If you use .push to add a new value
to the end of the array it's O(1) because regardless of the length
of the existing array it's just adding one more thing at the end.

If, however, you were to add a new item at the start or anywhere else
in the array, it becomes O(N) because every subsequent item after the 
new one will have to have it's index position updated to reflect the
change.

I'm going to go out on a limb and guess the same is true for removing
items from an array. UPDATE: I was right.

As for access, it's a constant O(1) because so long as you have the
index number you want JS can instantly jump to it, whether it's 1
or 1000.

--- Big O of Array Methods ---

push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * log N)
forEach/map/filter/reduce/etc - O(N)

*/