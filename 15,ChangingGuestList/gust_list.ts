

let Guest_List :string[] =['Asad','Hamza','Shoaib','Noman'];

for(let i=1;i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');

}

let absent_Guest :string = 'Hamza';

let new_Guest :string ='Muneeb';

Guest_List[1] = new_Guest ;

for(let i=1; i<Guest_List.length; i++){
    console.log('Dear Mr.'+ Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(` Mr. ${absent_Guest} is not coming in party.`)