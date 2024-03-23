//Large Shirt:Modify the make_shirt() function so that shirts are large by default.....
//make a large shirt and a medium shirt with the default message.and a shirt of any size with adifferent message.


function make_shirt(size:string = 'Large', text:string = 'I love TypeScript.'){
    console.log(`creating a ${size} shirt with the message: ${text}`);
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'I love python');
