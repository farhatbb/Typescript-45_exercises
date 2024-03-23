"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Equality and Inequality Test1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and Inequality Test2
console.log("Inequality test with strings: ", "Apple" != "orange");
//Test using the Lower Case function test:
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equality test with numbers:", 26 === 26);
//Numerical test involving inequality
console.log("Inequality test with numbers:", 26 != 35);
//greater than tes
console.log("Greater than test", 10 > 5);
//Less than test
console.log("Less than test:", 5 < 10);
//greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to test:", 5 <= 10);
//Tests using "and" and "or" operator
console.log("And operator test:", 5 === 5 && 10 > 5);
console.log("or operator test:", 5 === 5 || false);
//Test weather an items is an array
const fruits = ['Nashpati', 'Banana', 'Apple'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));
//Test weather an items is not in a array
console.log('Test "Orange" is not in  the  array:', !fruits.includes("Orange"));
