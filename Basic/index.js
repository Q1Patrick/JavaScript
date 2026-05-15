// 0. console.log('Hello')
//console.log('I like pizza!')


// window.alert('This is an alert')
//window.alert('I like pizza')

//This is a comment
//document.getElementById("myH1").textContent = 'Hello';
//document.getElementById("myP").textContent = 'I like pizza!';

/*
This 
is 
a 
comment
*/

// 1.Variables

//let age;
// age = 21;

//Error
//let price = 10.09;
//let gpa = 2.1;

/* let fullName = "Bro Code";
let age;
age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`; */

/* let name = "hello";

let reversed = name.split("").reverse().join("");

console.log(reversed);

document.getElementById("reverseBtn").onclick = function(){
    let text = document.getElementById("text").value;

    let reversed = text.split("").reverse().join("");

    document.getElementById("output").textContent = reversed;
}

document.getElementById("reverseBtn").onclick =
function(){

    let text =
    document.getElementById("text").value;

    let reversed =
    text.split("").reverse().join("");

    document.getElementById("output").textContent =
    reversed;
} */
// 2. Arithmethic operators

//let students = 30;

//students = students + 1
//students = students - 1
//students = students * 2
//students = students / 2
//students = students ** 2
//students = students % 2
//let extraStudents = students % 3

//student += 1 ;
//student -= 1 ;
//student *= 2 ;
//student /= 2 ;
//student **= 1 ;
//student %= 2 ;

/* 
    operator precendence
    1. parentthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction

    let result = 1 + 2 * 3 + 16;

console.log(result);
*/

// 3. How to accept user input

// 3.1. EASY WAY = window prompt

/* username = window.prompt("What's your username?")

console.log(username); */

// 3.2 PROFESSIONAL WAY = HTML textbox

/* let username;

document.getElem25
entById("mySubmit").onclick = function(){
    username  = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} */

// Type conversion = change the datatype of a value to another
//                      (strings, numbers, booleans)

//let age = window.prompt("How old are you")
//age+=1;
//console.log(age, typeof age);


/* let x = "pizza"; vocabulary everwhere in my life : convert = chuyen doi, bien doi, cai tao hoac thay doi
let y = "pizza";
let z = "p11izza";
x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z); */

// 4. Const 
//Const = a variable that can't be changed

/* const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius =document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";

} */

/* 

// 5. Counter Program  
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count; 
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count; 
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count; 
} */


// 6. Math object

/* let x = 3.21;
let y = 2;
let z ;

//z = Math.round(x); // Làm trong 
//z = Math.floor(x); // Làm tròn xuống
//z = Math.ceil(x); // Làm trong lên
//z = Math.trunc(x); // Cắt bỏ thập phân
//z = Math.pow(x, y); // Lũy thừa
//z = Math.sqrt(x); // Căn bậc 2
//z = Math.log(x); // logarit
//z = Math.sin(x); 
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x); 
//z = Math.sign(x); // kiểm tra dấu số
//let max = Math.max(x,y,z); // tìm max 
//let min = Math.min(x,y,z); // tìm min 

console.log(z); */

// 7. Random Number
/* const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * max) + min;

console.log(randomNum); */

/* const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1; 
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
    randomNum3 = Math.floor(Math.random() * max ) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

} */

// 8. IF STATEMENTS = if a condition is true, execute some 
// code if not, do something else

/* let age = 25;

if( age >= 18){
    console.log("You are old enough to enter this site");
}else{
    console.log("You must be 18+ to enter this site")
} */


/* const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit,onclick = function(){
    age = myText.value;
    age = Number(age);

if(age >=100){
    resultElement.textContent = `You are TOO OLD to enter this site`;
} 
else if(age == 0){
    resultElement.textContent = `You can't enter. You were just born`;
}
else if(age >= 18){
    resultElement.textContent = `You are OLD enough to enter this site`
}
else if(age < 0){

    resultElement.textContent = `Your age can't below 0`;
} else{
    resultElement.textContent = `You must be 18+ to enter this site`;
}
} */

// 9. .checked = property that determines the checked state of an
//                  HTML checkbox or radio button element

/* const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribe`;
    }
    else{
        subResult.textContent = `You are NOT subcribe`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with Master Card`;
    }
     else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
     }
    else{
        paymentResult.textContent = `You must select a payment type`;
     }
} */

//10. ternary operator = a shortcut to if{} and else{} statement
//                          help to assign a variable based on a condition
//                          condition ? codeIftrue : codeIfFalse

/* let age = 21;
age >= 18 ? "You're an adult" : "You're a minor";
 */

/* let time = 9; 
let greeeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeeting); 

let isStudent = false; 
let message = isStudent ? "You're a student " : "You are NOT a student";
console.log(message); */
/* 
let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`) */

// 11. SWITCH = can be an efficient replacement to many else if statements
/* let day = 1;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`)
} */

/* // 11. string methods = allow you to manipulate and work with text (strings)

let userName = "BroCode"; 
// console.log(userName.charAt(2))
let result = userName.includes(" ");

if(result){
    console.log("Your username can't include ' '");
}else{
    console.log(userName);
} */

/* let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber); */

// 12. string slicing = creating a substring 
//                      from a portion of another string

//                      string.slice(start, end)

/* const fullName = "Brosherld Code";

//let firstName = fullName.slice(0,2);
//let lastName = fullName.slice(4,8);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); */

/* const email = "Bro@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(userName);
console.log(extension); */

// 13. Method chaining = Calling one method after another
//                   is one continouns line of code

// ------------- No Method Chaining -------

/* let username = window.prompt("Enter your username: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username); */

// ------------- METHOD CHANINING ----------
/* let username = window.prompt("Enter your username: ");
 username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);  */

// 13. logical operators = used to combine or manipulate boolean values
//                         (true or false)

//                          AND = &&
//                          OR = ||
//                          NOT = !

/* const temp = 20;

if(temp >= 0 && temp <= 30){
    console.log("The weather is GOOD ");
}
else{
    console.log("The weather is BAD")
} */

// 14. Strict equality
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

// 15. while lopp = repeat some code WHILE some condition is true

/* let username = "";

while(username ==="" || usernam === null){
    console.log(`You didn't enter your name`);
}

console.log(`Hello ${username}`);

 */

/* let loggefIn = false;
let username;
let password;

while(!loggefIn){
    
} */

// 16. for loop  = repeat somde code a LIMITED amount of times

/* for(let i = 10; i > 0 ; i-=3){
    console.log(i);
}

console.log("HAPPY NEW YEARS");
 */

// 17. Number Guessing GAME
/* const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attemps = 0;
let guess;
let running = true;

while(running == true){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
if(isNaN(guess)){
    window.alert("Please enter a valid number");
}else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a valid number")
} else{
    attemps++;
    if(guess < answer){
        window.alert("TOO LOW! TRY AGAIN!");
    }else if(guess > answer){
        window.alert("TOO HIGH! TRY AGAIN~");
    }else{
        window.alert(`CORRECT! The answer was ${answer}. It took you ${attemps} attemps`)
        running = false;
    }
}
} */

// 18. function = A section of reusable code.
//      Declare code once, use it whenever you want.
//      Call the function to execute that code.

/* function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to dear ${username} !`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Patrick", 21);
happyBirthday("Spongebob", 30);
happyBirthday("BroCode", 25); */

/* function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}
function isEven(number){
    
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("Phat@fake.com"));
console.log(isValidEmail("Phatfake.com"));
console.log(isValidEmail("Phat@fake.com"));
console.log(isEven(14)); */
