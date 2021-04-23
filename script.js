// TYPE COERSION & TYPE CONVERSION
// types are one the fundemental aspects of programming
// we need to understand this because js can sometime behave in a wierd way
// type conversion is when we manually convert from one data type to another
// type coersion is when js automatically does it behind the scenes for us

// TYPE CONVERSION
const inputYear = "1993";
console.log(inputYear + 15);
// calculating with this wont really work
// string plus string does not work as math

console.log(Number(inputYear));
// converting the string to a number using the built in function Number()
console.log(Number(inputYear) + 15);
// we will learn further on what a function is
// we can convert strings to numbers using this function
// you see the difference on the variable colors
// important thing is that the original value is not converted
// the Number function only gives us a converted version
console.log(inputYear);

// console.log(Number('Helena)) will give us NaN = not a valid number
// the wierd thing is NaN not a number is the type number :P it means its nt a valid number
// console.log(typeof NaN)

console.log(String(25));
// white value means it is a string. You need capital S and N in the functions

// TYPE COERSION
// happens when we have two values of different types js will convert it behind the scenes
// we already did this
console.log("I am  " + 35 + " years old");
// the output is white
// many other language does not have type coersion automatically
// so therefor JS is great :D.... and also confusing!

// not all operators do type coersion to string
console.log("23" - "10" - 3);
// works fine
// what happens if we use plus?
console.log("23" + "10" + 3);
// trigger manual conversion

// logical operator
console.log("23" > "18");
// also converts strings to number only time it doesnt is with + operator

// lets play a little game
// GUESS THE OUTPUT
let n = "1" + 1;
// we start with the string 1 then add number 1
// '1' + 1 is actually 11 it is the string 11 '11'
n = n - 1;
// n = 11 and 11 - 1 = 10
// after the string 11 will be converted to a number and 11 - 1 is 10
console.log(n);

// bad practice to rely on type coersion it can introduce many bugs
// it only happens when you do not know what you are doing
// coersion is a great mechanism that allows us to write more redable and better code
// when we understand it, so we need to learn about type coersion and conversion!

// BOOLEAN
// FALSY values are not exactly false but will be false when we try to convert them into a boolean
// 5 falsy values: 0, '', undefined, NaN, null
// these 5 values will always be converted to false when we attempt to convert them into a boolean
// everything else is so called truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Helena"));
console.log(Boolean({}));

const money = 200;

// lets test if we have money or not
if (money) {
  console.log("Don't spend it all!!");
} else {
  console.log("You should get a job!");
}
// no matter what we put here js will try to convert it to a booelan
// we know that money is 0 and that is a falsy value
// so therefor the conversion will return false
// if we change it to something else what will happen then?
// lets say 200
// it will return true so the if block will execute

let height = -200;
if (height) {
  console.log("YAY! It's defined");
} else {
  console.log("height is undefined");
}
// height is undefined and its a falsy value therefor else block is executed
// we can run into a problem
// what if height is 0 which is a valid number but 0 is a falsy value and will return the else block
// so we get height is undefined but it is not true
// we can fix this by using logical operators which we will talk more about later

// EQUALITY OPERATORS
const age = 18;
if (age === 18) console.log("It's true");
// we do not need curly bracers when only if statement

if (age == 18) console.log("It's true");
// so how does the equality operator work?
// it will return a true or false value but it will only be true if both sides are
// exactly the same
// 18 === 18 true 18 === 19 false
// 3 equal is strict it does not perform type coersion only true when both values ar e axactly same
// 2 equal actually does type coersion
// '18' == 18 will give us true
// because the string 18 will be converted to a number
// '18' === 18 will be falsebecause its not the same
// avoid the loose equality as much as you can => clean code
// introduce many hard bugs => always compare values with strict equality
// better to convert manually than to rely on type coersion

const number = prompt("Type a number");

const number = 25;

if (number === 25) {
  console.log("Cool");
} else if (number === 7) {
  console.log("Also cool");
} else {
  console.log("The number is not cool...");
}
console.log(number);

// we need to convert before we compare
const number = Number(prompt("Type a number"));
if (number === 25) {
  console.log("Cool");
} else if (number === 7) {
  console.log("Also cool");
} else {
  console.log("The number is not cool...");
}
console.log(number);
// first checks the if then the else if and then the else
// you can do as many else if as you want although its not recommended we will learn
// a better way later
// we now have other conditions so we dont go emmidietly to the else if the first statement is false

// operator for different, not equal
if (number !== 10) console.log("Number is not 10");
// strict
if (number != 10) console.log("Number is not 10");
// not strict
// sometimes we need equal and sometime the different just make sure to use the strict version

// SWITCH
// switch is an alternative way of writing a complicated if/else statement
// when we want to compare one value to multiple different options

/*
if (number === 25) {
  console.log("Cool");
} else if (number === 7) {
  console.log("Also cool");
} else if (number === 7) {
  console.log("The number is not cool...");
} else if (number === 7) {
  console.log("The number is not cool...");
} else if (number === 7) {
  console.log("The number is not cool...");
} else if (number === 7) {
  console.log("The number is not cool...");
} else {
  console.log("The number is not cool...");
}*/

// lets say we have a weekday variable and each day there is a different activity
// so basically we are going to match one activity to each day
// in a real app data wont be hardcoded it would come from an input :) just a side note
// we put day in () because that is what we wanna switch (set activity to each day)
// then we need a block and in the block we can define the different cases
// and another side note in a real app we wouldnt be loging stuff to the console
// this is just so that we can learn how stuff works
// the case is monday and then we define what we want to happen in the case of monday
// switch syntax is a little bit different then other stuff in JS
// it is exactly the same in Java and C# oop languages

const day = "tuesday";
// Try to code the exact same as the switch if/else
switch (day) {
  case "monday": // day === "monday" we do something, notice th : its not ;
    console.log("Code");
    console.log("And also go to the gym");
    // can execute multiple lines in here
    break;
  // you need to end the case with break
  case "tuesday":
    console.log("Do coding assignment");
    break;
  case "wednesday":
  case "thursday":
    // u can run the same code for two different values
    console.log("Go for a walk");
    break;
  case "friday":
    console.log("Study code");
    break;
  case "saturday":
    console.log("Have some time off!");
    break;
  case "sunday":
    console.log("Prepare for next week");
    break;
  default:
    console.log("Not a valid day");
  // default will be executed if all other options fail almost like an else
}
// without the break the code continues executing therefor we need the break where we
// want to stop => after a case
// the switch does a STRICT comparison

// using if/else

if (day === "monday") {
  console.log("Code");
  console.log("And also go to the gym");
} else if (day === "tuesday") {
  console.log("Do coding assignment");
} else if (day === "wednesday") {
  console.log("Go for a walk");
} else if (day === "thursday") {
  console.log("Go for a walk");
} else if (day === "friday") {
  console.log("Study code");
} else if (day === "saturday") {
  console.log("Have some time off!");
} else if (day === "sunday") {
  console.log("Prepare for next week");
} else {
  console.log("Not a valid day");
}
// as you can see we write a lot of repetable code here...
// we also dont need the break
// switch we need to write a little bit more code but it is much more readable
// switch is becoming less and less used but you should know about it and in this
// case I would use the switch. But its a question about code style aswell

// BOOLEAN LOGIC

const hasDriversLicense = true;
const hasGoodVision = true;

// A and B variables
console.log(hasDriversLicense && hasGoodVision);
// && = and operator
// && only return a true value when all of the variables are true

console.log(hasDriversLicense || hasGoodVision);
// || = or operator
// || only needs one variable to be true

console.log(!hasDriversLicense);
// '!' = not operator
// "!" inverts the value

// lets combine these
const shouldDrive = hasDriversLicense && hasGoodVision;
// person need drivers license and good vision to drive

// we can move this to the i condition - this is how you should do not the above
if (hasDriversLicense && hasGoodVision) {
  console.log("You are able to drive");
} else {
  console.log("Someone else should drive..");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

// now lets see if sara can drive
// she can only drive if she has a license, good vision and is not tired
// we need to invert isTired so it needs to be false
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive");
} else {
  console.log("Someone else should drive..");
}
// so what happens now? what will the output be?
// one of the conditions are false so the else block will execute
// if we change it to false the condition of the if statement will be true

// THE CONDITIONAL OPERATOR - TERNARY
// so we saw 2 way of writing coonditionals if/else and swirch but there is anothre one TERNARY
// this one lets us write it all in one line

const age = 19;
age >= 18 ? console.log("You are 18") : console.log("You are not 18");
// the '?' is like the if block the condition in here ony one thing can be done
// we need a mandatory else block which goes after the colon
// ternary has 3 parts: condition, if part and else part
// it is an operator like the name says and an operator always produce a value which
// means it is an expression. CHECK THE VIDEO ON MONDAY :D
// this means if we have a value we can then assign that value to a variable
// can make the turnery useful to conditionally declare variables

if (age >= 18) {
  console.log("You are 18");
}

const drink = age >= 18 ? "beer" : "water"; // expression
// this is now and expression we can now store it to a variable
console.log(drink);

// drink is now defined conditionally
// with an if else statement this wouldnt be so easy

let drinkTwo;
if (age >= 18) {
  // statement
  drinkTwo = "beer";
} else {
  drinkTwo = "water";
}
// we can declare the variable above but need to assign value inside the scope
// because if we declare inside the block it is not available anywhere else

// we can now have conditionals inside a template literal
console.log(`I can drink ${age >= 18 ? "beer" : "water"}`);
// this works because it is an expression

// this can be a little bit confusing so be sure to practice and try to understand it
// OBS turnery is not a replacement for if/else but it is perfect when we need to take
// a quick decision
