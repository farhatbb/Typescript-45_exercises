"use strict";
// No users: Add an if test to Exercise 28 to make sure the list  of users is not empty.
//.If the list is empty, print the message we need to find some users!
//.Remove all of the users from your array ,and make sure the correct message is printed.
let userNames = ['admin', 'Ali', 'Hamaad', 'shoaib', 'Ahmed'];
if (userNames.length === 0) {
    console.log('we need to find some users!');
}
else {
    userNames = [];
    console.log('All users Names have been removed , ' + userNames.length);
}
