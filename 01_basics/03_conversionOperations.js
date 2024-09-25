let score = undefined

// console.log(typeof score); //simple
// console.log(typeof(score)); //In method format

/*
 Every word comes with paraenthsis are called methods or function in javascript
*/

// conversion with Number

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// 33 -> 33
// anbc22 -> NaN
// treu -> 1 and false -> 0
// null -> 0
// undefined -> NaN

/*
 NaN is also a type of number datatype.
*/

// conversion with boolean

let isLoggedIn = "nouman";

let isLoggedInInBoolean = Boolean(isLoggedIn)

// console.log(isLoggedInInBoolean);

// so after investigating with numberous values such as,
// 1 => true
// 0 => false
// "" => false
// "nouman" => true

// conversion with String

let someNumber = 33

let someNumberInString = String(someNumber)

// console.log(someNumberInString);
// console.log(typeof someNumberInString );

// *********************************************** Operations ******************************************************************

let value = 3;

let negValue = - value;

// console.log(value);
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3
// console.log(2%3); modulos or remainder

let str1 = "nouman";
let str2 = " mullaji"

// console.log(str1 + str2);

// complex operations

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 1);
// console.log(1 + 2 + "2"); // Bad practice

// console.log((2+3) * 10); // Good practice

// console.log(+true); // => 1
// console.log(+""); => 0
// console.log(+"nouman"); => NaN

// prefix and post fix:
// Syntax: x++ , ++x


// let x = 2;

// console.log(x); // =>2
// console.log(++x); // => 3

// console.log(x); // => 3

// console.log(x++); // => 3
// console.log(x); // => 4

// Example: postfix increment
let num = 3
const num2 = num ++ // here it will first use the value of num and then increase num value

// console.log(`num:${num}, num2:${num2}`);

// Example: prefix increment

let a = 3;
let b = ++ // here it will first increase value of a and then use the value of a

console.log(`a:${a}, b:${b}`);














