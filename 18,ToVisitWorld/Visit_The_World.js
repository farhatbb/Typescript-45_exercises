"use strict";
//store the location in an array.Make sure the  arrayis not alpha-order.
let places = ["Eiffel Tower", "Taj Mahal", "Niagara Falls", "Statue Of Liberty", "Tokyo Tower"];
//print the array in its original order.
console.log('original ' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its original order.
console.log('original ' + places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('original ' + places);
//Reverse the order of your list.print the array to show that its order has changed.
console.log('original ' + places.reverse());
//Reverse the order of your list again.print the list to show it's back to its original order.
console.log('original ' + places.reverse());
//sort your array so it's stored in alphabetical order.print that array to show that its order has been changed.
console.log('original ' + places.sort());
//sort to change your array so it's sorted in reverse alphabetical order.print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
