// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);

console.log("2" > 1); // => true, becoz comparision operator convert string into a number datatype.
console.log("02" > 1); // true


console.log(null > 0); // bad practice we need to avoid
console.log(null == 0); // bad practice we need to avoid
console.log(null >= 0); // bad practice we need to avoid

console.log(undefined == 0); // bad practice we need to avoid
console.log(undefined > 0);  // bad practice we need to avoid
console.log(undefined < 0); // bad practice we need to avoid

/*
The reason is that an equality check == and comparisons such as >, <, >=, <=, work differently.
Comparisons  converts null to a number, treatings as 0.
That's y null >= 0 is true and null > 0 is false
*/

// strict check ===
console.log("2" === 2); // results false, becoz here compiler also check for datatype
