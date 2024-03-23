"use strict";
//Sandwiches:write a function that accepts a array of items a person wants a sandwich....
//call the function three times using a different number....
function makeSandwich(item) {
    console.log('\nMaking your sandwich  with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
