
//Write a program that creates objects containing these items.




//Datatype of person
interface person{
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
//person object
let person :person = {
    age: 30,
    name:'Ahmed',
    nationality : 'Paistan',
    student : true
}

//print person data

console.log(person);

//Datatype of car object

interface car{
    maker :string,
    color :string,
    automatic : boolean
}

//car object


let car = {
    maker :'toyota',
    color :'White',
    automatic : true
}
//print car object
console.log(car);
