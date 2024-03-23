//Great Magicians:start with a copy of your program from Exercise 39. write afunction called make_great()
//that modifies the array of magicians by adding the phrase the Great to each magician's name. call
//show_magicians()to see that the list has actually been modified.

let magician : string[] = ['Harry potter', 'Ron Weasley', 'Shin Lim', 'Derren Brown'];


function make_great (magicianArray:string[]){

    for(let i=0; i<magicianArray.length; i++){
     magician[i]  = 'the Great  ' +  magicianArray[i]
    }

}


function show_magicians(magicians: string[]){

    magician.forEach(element => {
        console.log(element);
        
    });
}
make_great(magician);

show_magicians(magician);