"use strict";
//Ordinal Numbers: ordinal numbers indicate their position in a array, such as 1st or second.Most ordinal numbers end in the, except 1,2,and3.
//.store the numbers 1through 9 in a array.
//.Loop through the array.
//.Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//you output should read "ist 2nd 3rd 4th 5th 6th 7th 8th 9th",and each result should be on a seprate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
