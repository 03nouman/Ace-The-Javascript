// Stack-memory stores (Primitive Datatype) variables and Heap memory stores (Non-Primitive-Datatype) variables

/* 
Stack-memory:
1. stack memory gives copy of memory to another variable
2. But changes doesn't apply on itself, which are done by another variable to whom we have shared memory refrence.

Heap memory:
1. heap memory gives direct refrence of memory to another variable,
2. And changes do apply on itself, which are done by another variable to whom we have shared direct memory refrence.
*/

// Example for stack memory:
let email = "abc@gmail.com";
let email2 = email;

email2 = 'xyz@gmail.com'

// console.log(email); //result: abc@gmail.com
// console.log(email2); //result: xyz@gmail.com

// Example for heap memory:
let userOne = {
    salaray: '1000$'
}

let userTwo = userOne
userTwo.salaray = '2000$'

console.log(userOne.salaray); //result: 2000$, becoz refrence or non-primitive shared there direct refrence of the data.
console.log(userTwo.salaray); //result: 2000$
