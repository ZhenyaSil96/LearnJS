// Lesson 2

//Task 1

//Given a variable with the value '5px' and a variable with the value '6px'. 
//Find the collection amount from these results and display it on the screen.

let a = '5px';
let b = '6px';
let sum = parseInt(a) + parseInt(b);

console.log(`Sum a and b = ${sum}`);


//Task 2 

//Given a variable with the value '5.5px' and a variable with the value '6.25px'. 
//Find the sum of pixels from the values of these variables and display it on the screen

let a_float = '5.5px';
let b_float = '6.25px';
let sum_float = parseFloat(a_float) + parseFloat(b_float);

console.log(`Sum float number a and b = ${sum_float}`);


//Task 3 

//Modify the previous task so that the letters 'px' are added to the output. 
//That is, if our sum is 11.75, then let '11.75px' be displayed on the screen.

let newSum__float = sum_float + 'px';
console.log(`Modification sum_float = ${newSum__float}`);

//Task4

//Given a variable a with the value '10' and a variable b with the value '20'.
//Add these variables as numbers

let a_10 = '10';
let b_20 = '20';
let resultA_10_B_20 = parseInt(a_10) + parseInt(b_20);
console.log(`Resultat sum a and b = ${resultA_10_B_20}`);


//Task5 

//Without running the code, determine what will be displayed on the screen:
//alert( Number('2') + Number('3') );

// Выведит Число 5 так как Number преобразует из строки 
//в число и получится два числа 2 и 3 и их сумма будет равняться 5.


//Task6 

//Without running the code, determine what will be displayed on the screen:
//alert( 2 + Number('3') );

//На экран выведит число 5 так как у нас есть одно число и у нас есть строка 
//которая преобразуется в число с помощью Number.


//Task7

//Without running the code, determine what will be displayed on the screen:
//alert( '2' + Number('3') )

// На экран выведится число 23, так как 2 является строко, а 3 преобразуется в число.
// И получится конкатенация между числом и строкой. И на выходе получаем 23.


//Task8 

//Using the described technique with a plus, 
//correct the given code so that variables a and b are assigned a number,
// not a string, and the result, accordingly, is not '23', but 5. 
//You need to solve the problem in 2 ways

//let a = '2';
//let b = '3';
//alert(a + b);

// 1 sposob
let a_1 = '2';
let b_1 = '3';
let sum_1Sposob = parseInt(a_1) + parseInt(b_1);
console.log(`1 sposob sum = ${sum_1Sposob}`);

//2 sposob 
let a_2 = '2';
let b_2 = '3';
let sum_2Sposob = parseFloat(a_2) + parseFloat(b_2);
console.log(`2 sposob sum = ${sum_2Sposob}`);


//Task 9

//A variable with a number is given. 
//Find the number of digits in this number.

// let number = 2;
// let resultNumber = 0;
// for(let x = 0; x <= number; x++) {              // Чутка не правильно понял сначало задание, нашел сумму чисел
//     console.log(`Number = ${x}`);
//      resultNumber += x;
//     console.log(`result number = ${resultNumber}`);
// }


let number9 = 12345;

let newNumber9 = number9.toString();
let resultNewNumber9 = newNumber9.length;
console.log(`Number 9 = ${typeof(newNumber9)}`);
console.log(`New number 9 length = ${resultNewNumber9}`);


//Task10;

//Given two variables with numbers. 
//Find the number of digits in one and the second number, 
//add the results and display them on the screen.

let num_x = 1023;
let num_y = 20;

let quantity_x = num_x.toString();
let resQuantity_x = quantity_x.length;
console.log(`Количество чисел в number x = ${resQuantity_x}`);

let quantity_y = num_y.toString();
let resQuantity_y = quantity_y.length;
console.log(`Количество чисел в number y = ${resQuantity_y}`);

let sumQuantity = resQuantity_x + resQuantity_y;
console.log(`Сумма количество двух чисел = ${sumQuantity}`);


//Task11

//Correct the addition
//Below is the code that prompts the user for two numbers and shows their sum.
//It doesn't work correctly. The example code outputs 12 (for the default field value).
//Where is the mistake? Fix it. The result should be 3.

// Prompt по умолчанию выводит строку даже если пишим число, 
// то это все равно будет строка, для того чтобы не было строки , а было число 
// нужно добавить плюс и тогда prompt будет выводит число
let prom_a = +prompt("Первое число?", 1);
let prom_b = +prompt("Второе число?", 2);

alert(prom_a + prom_b); // 12

// Task 12

//Working with Transformation
//What is the result of the expressions below?
//Think carefully, write down the answers and check the solution.

//12.1
"" + 1 + 0 // '10'  //тут правильно дал ответ, а потом проверил

//12.2
"" - 1 + 0 // '-10' //тут не правильно ответил, ответ -1

//12.3
true + false // 1 //тут правильно дал ответ, а потом проверил

//12.4
6 / "3" // 2 //тут правильно дал ответ, а потом проверил

//12.5
"2" * "3" // 6  //тут правильно дал ответ, а потом проверил

//12.6
4 + 5 + "px" // '9px'  //тут правильно дал ответ, а потом проверил

//12.7
"$" + 4 + 5 // "$45"  //тут правильно дал ответ, а потом проверил

//12.8
"4" - 2 // 2 //тут правильно дал ответ, а потом проверил

//12.9
"4px" - 2 // '2px'  //тут не правильно ответил, ответ NaN

//12.10
" -9 " + 5 // -4 //тут не правильно ответил, ответ '-9 5'

//12.11
" -9 " - 5 // '-9 -5'  //тут не правильно ответил, ответ -14

//12.12
null + 1 // NaN  //тут не правильно ответил, ответ 1

//12.13
undefined + 1 // undefined либо NaN  // ответ NaN


//Additional tasks

//Task1

//Rework this code so that it contains increment and decrement operations:
//let num = 10; 
//num = num + 1; 
//num = num + 1;
//num = num - 1; 
//console.log(num);

let num_dop = 10;
num_dop++;
num_dop++;
num_dop--;
console.log(`number dop task 1 = ${num_dop}`);


//Task2 

//Without running the code, determine what will be displayed on the screen:

let num_dop2 = 3;
// Тут есть постфексный и префексный инкремент и дикремент, 
// я точно не помню какой из них срабатывает раньше 
// Думаю, что результат будет 3
//Чтобы результат был 4 это нужно написать ++num_dop2 в консоли 
console.log(`Number increment = ${num_dop2++}`);  


//Task3
//Without running the code, determine what will be displayed on the screen:

let num_dop3 = 3;
//Тут уже используется дикремент, отнимает на 1 
// Результат будет 3 
// Если мы бы написали --num_dop3 тогда бы результат был бы 2
console.log(`Number dicrement = ${num_dop3}`);


//Task4
//Without running the code, determine what will be displayed on the screen:

let num_dop4_1 = 3;
let num_dop4_2 = num_dop4_1++;
console.log(`Number dop 4_1 = ${num_dop4_1}`);  // Будет 3  // Тут будет 4
console.log(`Number dop 4_2 = ${num_dop4_2}`);  // Будет 4    //Ответил не правильно // Тут будет 3


//Task5 
//Without running the code, determine what will be displayed on the screen:

let num1 = 3; 
let num2 = --num1;
alert(num1); // 2
alert(num2); // 3 // Тут не правильно ответил будет 2

//Task6
//Without running the code, determine what will be displayed on the screen:
let number1 = 3; 
let number2 = number1--; 
alert(number1); // 3  // Ответил не правильно будет 2
alert(number2)  //2   Будет 3

//Task7
//Without running the code, determine what will be displayed on the screen:

// let nums1 = 3; 
// nums1++; 
// let nums2 = nums1--; 
// alert(nums1++); //3
// alert(--nums2); //3


//Task8
//The user enters the time in hours (for example, 18) into the text field. If the time is more than 17, 
//the message “Good evening” is displayed. In any other cases - “Good afternoon”

let data = +prompt("Enter data");
if (data < 18) {
    console.log('Добрый день');
}else if (data > 18) {
    console.log('Добрый вечер');
}


//Task 9
//The user enters a name in the text field. If the entered name is Jonh, 
//then the message “Hello Jonh” is displayed. Otherwise, the message “I don’t know you.”

let name = prompt('Enter name');
if (name === 'Jhon') {
    console.log('Hi Jhon');
}else if(name !== 'Jhon') {
    console.log('Why are you?');
}

//Task 10
//Using the if..else construct, write code that receives a number via prompt and then displays it in alert:

let n = +prompt('Enter number');
if (n > 0) {
    console.log(`n > 1`);
}else if (n < 0) {
    console.log(`n < 1`);
}else if (n === 0){
    console.log(`n = 0`);
}