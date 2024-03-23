"use strict";
//Magicians: Make a array of magician's pass the array to a function called
//show_magician(), which prints the name of each magician in the array.
let magician = ['Harry potter', 'Ron Weasley', 'Shin Lim', 'Derren Brown'];
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
