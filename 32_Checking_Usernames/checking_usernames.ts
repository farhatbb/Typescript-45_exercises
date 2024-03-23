//Checking Usernames: Do the following to create aprogram that simulates how websites ensure that everyone hase a unique username.
//.Make alist of five or more usernames called current_users.
//.Make another list of five usersnames called new_users.Make sure one or two of the new usernames are also in the current_users list.

//.Loop through the new_users list to see if each new username has already been used.If it has,print a message that the person will need
//to enter a new username.If a username has not been used, print a message saying  that the username is available.

//.Make  sure your comparison is case insensitive. If 'john' has been used, 'JOHN' should not be accepted.


let current_users:string [] = ['AhMed','HAmzah','SalMan', 'Saad','john'];

let new_users:string [] = ['Bilal','AhMed','Dawood','Asad','HAmzah'];

new_users.forEach(newusername =>{
   let lowerCase:string = newusername.toLowerCase();
   if(current_users.map(c_user => c_user.toLowerCase()) .includes(lowerCase)){
    console.log(`The username ${newusername} is not available. please write a diffrent username`);
   }
   else{
    console.log(`The username ${newusername} is available.`);
   }
})