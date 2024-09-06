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




// Q6
//Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of
// vowels (a, e, i, o, u) in it.

//1)
// function countVowels(str) {
//     // Convert the string to lowercase to handle both uppercase and lowercase vowels
//     str = str.toLowerCase();
  
//     // Define a string containing all vowels
//     const vowels = 'aeiou';
  
//     // Initialize a counter for the number of vowels
//     let count = 0;
  
//     // Iterate over each character in the string
//     for (let char of str) {
//       // Check if the character is a vowel
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
  
//     // Return the total count of vowels
//     return count;
//   }
  
//   // Example usage:
//   console.log(countVowels("Hello World")); // Output: 3
//   console.log(countVowels("JavaScript")); // Output: 3
//   console.log(countVowels("OpenAI")); // Output: 3
  
//2)
// let vowels = (str)=>{
//     str = str.toLowerCase();

//     const vowels = "aeiou"

//     let count = 0;

//     for(let char of str){
//        if(vowels.includes(char))
//            count++;
   
//     }
//     return count;

// }
// console.log(vowels("muhammadumair"));

//  1) if (vowels.includes(char)): Here’s where we check if each character is a vowel:
//  2)vowels is the string 'aeiou'.
//  3).includes(char) is a method that checks if the string 'aeiou' contains the character char.





//Q7)
//Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array
// with duplicates removed.


// let removeDuplicates = (arr) =>{
//     arr = [... new Set(arr)]
//     return arr;
// }
// let res = removeDuplicates(["umair","ishaq","hassan","hassan","ishaq","umair","Muhammad"])
// console.log(res);



//Q8)
// Sum of Array Elements
// Write a function sumArray(arr) that takes an array of numbers and returns the sum
// of all the elements.

// let sumArray = (arr) =>{
//     let sum = 0
//     for(let char of arr){
//         sum += char
    
//     }
//     return sum
// }

// let res = sumArray([1,2,3,4,]);
// console.log(res);



// Q9)
// Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the
// formula F = C * 9/5 + 32.

// let celsiusToFahrenheit = (C)=>{
//     F = C * 9/5 + 32.
//     return F
// }

// let res = celsiusToFahrenheit(5);
// console.log(res);