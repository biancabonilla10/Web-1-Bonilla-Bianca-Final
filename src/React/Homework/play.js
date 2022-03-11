console.log('Hello');

/* Variables ---------------------------*/
const myConstant = 'A Value';
let myLet = 'Another Value';
const myString = 'I went to the park';
const myNumber = 2;

console.log('A Const Variable:', myLet);

myLet = 'Something Else';

console.log('A Const Variable:', myLet);

/* Functions ---------------------------*/
const myFunction = (myNum) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

myFunction(4);
myFunction(7);
myFunction(16);

/* Data Types ---------------------------*/
const aString = 'I went to the park'
const aTemplateString = `${aString} yesterday`;
console.log('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aobject = {
    name: 'Bianca Bonilla',
    email: 'biancabonilla10@yahoo.com'
};

console.log('aObject', aObject);

const myArray = [
    'this is my string',
    { make: "Honda", Model: "CRV" },
    1234,
];


