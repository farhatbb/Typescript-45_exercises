"use strict";
//Hello Admin: MaKe a array of five or more usernames, including the name 'admin'.Imagine you are writing code that will
//print a greeting to each user after they log in to website.loop through the array.and print a greeting to each user.
//.If the user is 'admin', print a special greeting ,such as Hello admin,would you like to see a status report?
//.Otherwise, print a generic greeting, such as Hello Eric,than you for logging in again.
const userNames = ['admin', 'Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello admin , would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging to again.`);
    }
}
