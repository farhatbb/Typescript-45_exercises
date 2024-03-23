"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. call the function make_great() with a copy
//of the array of magicians' names Because the orginal array will be unchanged,return the new array and store
//it in  a separate array.call show_magicians()with each array to showthat you have one array of the original names
//and one array with the great added to each magician's name
let magician = ['Harry potter', 'Ron Weasley', 'Shin Lim', 'Derren Brown'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my orginal array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);
