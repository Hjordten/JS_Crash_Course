//These values are stores on the stack
const name = 'john';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Brad',
    age: 40
}

let newName = name;
newName = ' Jonathan'

let newPerson = person
newPerson.name = 'Bradley'

console.log(name, newName);
console.log(person, newPerson);