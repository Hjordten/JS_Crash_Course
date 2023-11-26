function addfunction (a,b){
    return a + b;
}

const addarrow = (a,b) => { 
 return a+b;
}

console.log("this is a normal function call" + addfunction(1,2));
console.log("this is with an arrow function" +addarrow(1,2));

const substractarrow = (a,b) => a - b;

console.log("this is with arrow function" +substractarrow(3,2));

const double = a => a * 2;

console.log("this is with arrow function that only have one variable " +double(1));

const createobject = () => ({
    name: 'Brad',
});

console.log(createobject());

const numbers = [1, 2, 3, 4, 5];

// to much code
//numbers.forEach(function(n) {
//    console.log(n);
//});

// does the same as above, but with less code
numbers.forEach((n) => console.log(n));