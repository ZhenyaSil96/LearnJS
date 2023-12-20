//Lesson 4

//Task 1

//Write a program that prints the
//numbers from 1 to 100 in reverse order,
// but only numbers that are multiples of 3.

for (let x = 100; x >= 1; x--) {
    if (x % 3 === 0) {
        console.log(x);
    }
}

//Task 2

//Write a program that calculates the factorial 
//of a number entered by the user,
//but only if it is a number between 1 and 10.

function factorial (n) {
    if(n === 0 || n === 1) {
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}

let enterNumberFactorial = +prompt('Enter number');

if(enterNumberFactorial >= 1 && enterNumberFactorial <= 10){
    const resultFactorial = factorial(enterNumberFactorial);
    console.log(`Result factorial = ${resultFactorial}`); 
}else {
    console.log('Введите число от 0 до 10');
}


//Task 3 

//Write a program that asks John to enter a number and
//then checks whether the number is positive or negative.
//If it is positive, the program should print "John's number is positive".
//If negative, the program should output "John's number is negative".

let enterJhon = +prompt('Enter number Jhon');

if (enterJhon >= 0) {
    console.log('Johns number is positive');
} else {
    console.log('Johns number is negative');
}


// Tasks for working with functions in JavaScript



//Task 4

//Create a function that takes an array
//of numbers and returns the average of those numbers.

function average (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}

average([1,2,3,4,5,6,7,8,9,10]);

//Task 5

//Create a function that takes an array 
//of numbers and returns the maximum number in that array.

function maxNumber (arr) {
    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        } 
    }
    return maxNum;
}

const maxN = maxNumber([3,6,2,9,10,3,5]);

console.log(`Максимальное число в массиве: ${maxN}`);

//Task 6

//Write a program that takes an integer from the keyboard and, if it is positive, doubles it.
// The program should display the new value.
//Input: 8 ⇒ Output: 16)

let numberPositive = parseInt(prompt('Enter number'));
let resultNumberPositive = 0;
if(numberPositive > 0) {
    resultNumberPositive = numberPositive * 2;
}else{
    console.log('Вы ввели не положительное число');
}
console.log(`Ввод ${numberPositive} => вывод: ${resultNumberPositive}`);

//Task 7

//Write a program that receives an integer from the keyboard and,
// if it is zero, displays the message "zero" on the screen.
//Input: 0 ⇒ Output: zero)

let numberZero = parseInt(prompt('Enter Number'));
let resultatNumberZero = 0;
if(numberZero === 0) {
    console.log(`Ввод ${numberZero} => вывод :0 `);
}else {
    console.log('Введите ноль');
}

//Task 8

//Write a program that receives an integer from
//the keyboard and displays one of the following messages
//on the screen: “positive”, or “negative”, 
//or “zero” - depending on the value of the number.

//Input: 4 ⇒ output: positive;
//input: -7 ⇒ output: negative;
//input: 0 ⇒ output: zero)

let findNumber = parseInt(prompt('Enter number'));

if (findNumber > 0) {
    console.log('Positive number');
}else if (findNumber < 0) {
    console.log('Negative number');
} else {
    console.log('Number === zero');
}



//Task 9 

// Create a program that receives two integers from the keyboard and, 
//if the first is greater than the second, displays their sum, 
//and if vice versa, displays their product. If the numbers are the same,
// the program displays the message “the numbers are the same.”

//Input: 9, 2 ⇒ output: 11;
//input: 3, 8 ⇒ output: 24;
//input: 6, 6 ⇒ output: the numbers are the same)

let numberOne = parseInt(prompt('enter number one'));
let numberTwo = parseInt(prompt('enter number two'));
let resultatNumberOneTwo = 0;
if(numberOne > numberTwo) {
    resultatNumberOneTwo = numberOne + numberTwo;
    console.log(resultatNumberOneTwo);
}else if (numberOne < numberTwo) {
    resultatNumberOneTwo = numberOne * numberTwo;
    console.log(resultatNumberOneTwo);
} else if (numberOne == numberTwo) {
    console.log('Числа одинаковые');
}


//Task 10

// Write a program that takes an integer from the keyboard, 
//determines whether it is positive or not, and displays one
// of two messages on the screen: "a positive number" or "a non-positive number."

//Input: 6 ⇒ output: positive number;
//input: -8 ⇒ output: not a positive number;
//input: 0⇒ output: not a positive number)


let number10 = parseInt(prompt('Enter number'));

if(number10 >= 1) {
    console.log('Положительное число');
}else {
    console.log('Отрицательное число');
}


//Task 11

//Write a program that takes two numbers from the keyboard, 
//checks whether they are equal to each other or not, and then 
//displays a corresponding message on the screen.
//(Input: 4, 4 ⇒ output: the numbers are the same;
//input: 7, 9 ⇒ output: different numbers)

let numOne11 = parseInt(prompt('Enter one'));
let numTwo11 = parseInt(prompt('Enter two'));

if(numOne11 == numTwo11) {
    console.log(`Ввод: ${numOne11}, ${numTwo11} => вывод: числа одинаковые `);
}else{
    console.log(`Ввод: ${numOne11}, ${numTwo11} => вывод: числа разные `);
}


//Task 12

// Write a program that receives two numbers from the keyboard,
// the first of which is the number of students in the class, 
//and the second is the number of chairs in the office. 
//The program should check that all students will have a place to sit.

//Input: 24, 28 ⇒ output: there are enough chairs;
//input: 24, 22 ⇒ output: not enough chairs)

let student = parseInt(prompt('Enter student'));
let chair = parseInt(prompt('Enter chair'));

if(student < chair) {
    console.log(`Вввод: ${student}, ${chair} => вывод: стульев хватает `);
}else {
    console.log(`Вввод: ${student}, ${chair} => вывод: стульев  Не хватает `);
}