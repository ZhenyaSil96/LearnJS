//Lesson1 

//Task1 
//Working with variables

//1.1
//Create a variable. 
//Write the value 10 into it and display it on the screen (console.log).
// Then write the value 20 into it and display it on the screen.

var a = 10;
console.log(`a = ${10}`);

a = 20;
console.log(`Update a = ${a}`);

//1.2
//Create a variable num and assign it the value 3. 
//Print the value of this variable on the screen using the alert method.
//-Create variables b=10 and c=2. Display their sum, difference, product and quotient (the result of division).
//-Create variables d=15 and e=2. 
//Sum them up and assign the result to the result variable.
//Display the value of the result variable.

var num = 3;
alert(`Result num = ${num}`);

var b = 10;
var c = 2;
console.log('Sum b and c = ', b + c);
console.log('Difference b and c = ', b - c);
console.log('Multiplication b and c = ', b * c);
console.log('Division b and c = ', b / c);
console.log('Remainder of the division b and c = ', b % c);

var d = 15;
var e = 2;
var result = d + e;
console.log(`Result = ${result}`);

//2.1
//Create a variable for the name of our planet.
//Create a variable to store the name of the current site visitor.

var planet = "Name for our planet";
console.log(`Message = ${planet}`);
var lastVisitor = 'Danchik';
console.log(`Last visitor = ${lastVisitor}`);

//2.2
//Create several variables with first name, 
//last name, phone number, date of birth.

var name = "Dan";
console.log(`Name person = ${name}`);
var phone = 3805051235678;
console.log(`Phone = ${phone}`);
var birthDay = '15 febrary';
console.log(`Day birthaday ${birthDay}`);

//3.1
//Create a variable str and assign it the value 'Hello, World!'. 
//Display the value of this variable on the screen.

var hiWorld = 'Hello World';
console.log(`Message = ${hiWorld}`);

//3.2
//Create a name variable and give it your name. 
//Display the phrase 'Hello, %Name!%'.

var nameDan = 'Dan';
console.log(`Hello ${nameDan}!`);

//3.3
//Create a variable age and assign your age to it.
// Display 'I am %Age% years old!'

var age = 18;
console.log(`Мне ${age} лет!`);



//Tasks for working with characters in a string

//4.1
//Create a variable str and assign it the value 'abcde'. 
//Addressing the individual characters of this string, print the character 'a', 
//the character 'b', the character 'e'.

var str = 'abcde';
for(var x = 0; x <= str.length; x++){
    if (str[x] === 'a') {
        console.log(str[x]);
    }

    if (str[x] === 'b') {
        console.log(str[x]);
    }

    if (str[x] === 'e') {
        console.log(str[x]);
    }
}

console.log('///////');

console.log(str[0]);
console.log(str[1]);
console.log(str[4]);


//4.2
//Given a variable str with the string 'abcde' and a variable num with the character number. 
//Display the character whose number is stored in the num variable.

var numStr = +prompt('Enter index number');
console.log(str[numStr]);

//4.3
//Create a variable and put a string in it. 
//Print its last character to the screen 
//(use the length method for this)

var str1 = 'My name World';
var lengthStr1 = str1.length;
var lastLength = str1[lengthStr1 - 1];
console.log(`Последний символ = ${lastLength}`);

//4.4
//Given a string. Display its penultimate character (use the length method for this).

var lengthStr2 = str1.length;
var lastLength1 = str1[lengthStr2 - 2];
console.log(`Предпоследний элемент = ${lastLength1}`);

//4.5
//Create a variable with the text 'java' and a variable with the text 'script'. 
//Using these variables and the string addition operation, display the string 'javascript'.

var nameJava = 'Java';
var nameScript = 'Script';
var resultName = nameJava + nameScript;
console.log(`Result = ${resultName}`);