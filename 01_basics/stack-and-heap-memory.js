// Stack-memory stores (Primitive Datatype) variables and Heap memory stores (Non-Primitive-Datatype) variables

/* 
Stack-memory:
1. stack memory gives refrence of memory to another variable
2. But changes doesn't apply on itself, which are done by refered variable.

Heap memory:
1. heap memory gives refrence of memory to another variable,
2. But changes do apply on itself, which are done by refered variable.
*/

// Example for stack memory:
let email = "abc@gmail.com";
let email2 = email;

email2 = 'xyz@gmail.com'

// console.table([email,email2]);

// Example for heap memory:
let userOne = {
    salaray: '1000$'
}

let userTwo = userOne
userTwo.salaray = '2000$'

console.table([userOne,userTwo])
