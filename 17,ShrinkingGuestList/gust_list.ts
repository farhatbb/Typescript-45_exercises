

let Guest_List :string[] =['Asad','Hamza','Shoaib','Noman'];

//for(let i=1;i<Guest_List.length; i++){

   // console.log('Dear Mr.' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');

//}

let absent_Guest :string = 'Hamza';

let new_Guest :string ='Muneeb';

Guest_List[1] = new_Guest ;

//for(let i=1; i<Guest_List.length; i++){
    //console.log('Dear Mr.'+ Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')

//}

console.log(` Mr. ${absent_Guest} is not coming in party.`);

console.log('Good News! we find Big Table So we are inviting 3 more guests.')
//In Array added 3 Guest.
Guest_List.unshift('sir Zia Khan');
Guest_List.splice(2,3,'Imran Khan');
Guest_List.push('Naeem');
for(let i=1; i<Guest_List.length; i++){
    console.log('Dear Mr.'+ Guest_List[i] +',\n\nit is our pleasure to invite you in our party\n\nThank You!')

}
//sorry Message to Guest for not inviting.


console.log('\nsorry we can not arrange big table, only Two peoples will be invited.');
//Here I removed Guest.
while(Guest_List.length> 2){
   let remove_Guest= Guest_List.pop();
   console.log(`sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);

}
//only two invited Guest.
for(let i=1; i<Guest_List.length;i++){
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');


}
// I removed all guest from array.
Guest_List.splice(0,2);
console.log(Guest_List);
