//Logics Problems JS

//Q1)
//Factorial of a Number
// Write a function factorial(n) that takes a non-negative integer n and returns its
// factorial.

// function factorial(n){
//     if(n < 0){
//         return `factorial is not defined for negative integers`;
//     }
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     let result = 1;
//     for(let i = 2;i<=n;i++){
//         result *= i;
//     }
//     return result;

// }
// console.log(factorial(4));



//Q2
// Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with
// the elements in reverse order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].

// let reverse = (arr) => {
//     let revarr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revarr.push(arr[i])
//     }
//     return revarr
// }
// let result = reverse([1, 2, 3, 4, 5, 6]);
// console.log(result);



//Q3)
// Maximum of Three Numbers
// Write a function maxOfThree(a, b, c) that takes three numbers and returns the
// largest of the three.
// Example: maxOfThree(5, 8, 3) should return 8.

// let maxOfThree =  (a,b,c) =>{
//     if (a>b && a>c){
//         console.log("a is greater");
//     }
//     else if(b>a && b>c){
//         console.log("b is greater");
//     }
//     else{
//         console.log("c is greater");
//     }
// }
//  maxOfThree(2,54,30);


//Q4)
// Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's
// odd.

// let isEven = (n)=>{
//     if(n % 2 === 0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }
// isEven(40);


//Q5
// Write a function sum(a, b) that takes two numbers as arguments and returns their
// sum.
// Example: sum(3, 4) should return 7.

// let sumFUnction = (a,b)=>{
//     return a + b
// }
// let res = sumFUnction(4,5);
// console.log(res)