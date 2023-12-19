//Lesson 3

//Task1 

//Using an if..else construct, write code that asks:
//“What is the “official” name for JavaScript?”
//If the user enters “ECMAScript”, then show: “Correct!”, otherwise, display: “Don’t know? ECMAScript!

let nameJS = prompt('Enter name JS');
if(nameJS === 'ECMAScript'){
    console.log('Верно');
}else{
    console.log('Не знаете? ECMAScript!');
}

//Task2

//Print all numbers from 10 to 50 to the console using a FOR loop

for(let i = 10; i <= 50; i++) {
    console.log(i);
}

//Task3

//Use a loop to find the sum of numbers from 1 to 100.

let sum = 0;
for(let x = 1; x <= 100; x++) {
    sum += x;
}
console.log(`Sum from 1 to 100 = ${sum}`);


//Task4

//Create a salary object obj. 
//Display the salaries of Petya and Kolya. 
//var obj = {Kolya: '1000', Vasya: '500', Petya: '200'};


var obj = {
    Kolya: '1000',
    Vasya: '500',
    Petya: '200'
}

console.log('Зарплата Коли' , obj.Kolya);
console.log('Зарплата Пети' , obj.Petya);


//Task5

//You need to create an object in which you describe yourself in the format: "property: value"

//List of properties:
//- Name(string)
//- Last name(string)
//- Age(number)
//- Are there any pets(boolean)

let person = {
    name: 'Yevgenii',
    lastName: 'Silin',
    age: 18,
    animal: true
}

console.log(person);

//Advanced tasks for working with basic operators in JavaScript

//Task6

//1) Write a function that returns the sum of all even numbers in a given range.

function  sumEvenNumbers (start, end) {
    let sum = 0;
   for(let i = start; i <= end; i++) {
        if(i % 2 === 0) {
            console.log(`Четное число = ${i}`);
            sum += i;
        }
   }
   console.log(sum);
}

sumEvenNumbers(1,4);


// Task7

//Write a function that returns the product of all odd numbers in a given range.

function productOddNumbers (start, end) {
    let sum = 1;
    for(let x = start; x < end; x++) {
        if(x % 2 !== 0) {
            console.log(`Не четное число = ${x}`);
            sum *= x;
        }
        console.log(sum);
    }
}

productOddNumbers(1,6);
