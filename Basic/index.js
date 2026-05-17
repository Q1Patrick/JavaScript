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

// 19. Variable scope = where a variable is revognized
//                        and accessible (local vs global)

/* let x = 1; 
let x = 2 */

// 20. TEMPERATURE CONVERSION PROGRAM

/* const textbox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "degF"
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32 ) * (5/9);
        result.textContent = temp.toFixed(1) + "degF"
    }
    else{
        result.textContent = "Select a unit";
    }
} */

// 21. forEach = method used to iterate over the elements 
//           of an array and apply a specified function (Callback)
//           to each element

//            array.forEach(callback)
//            element, index, array are provided 

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;

}

function square(element, index, array){
array[index] = Math.pow(element,2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}


function display(element){
    console.log(element);
} */
/* 
let fruits = ["apple","orange","banana","coconut"];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowercase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
} */

// 22. map() = accepts a callback and applies that function
//             to each elemnt of an array, then return a new array.

/* const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
} */
/* 
const students = ["Spongebob", "Patrick", "Squidward","Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);
function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
} */

/* const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
} */

// 23. filter() : creates a new array by filtering
//                out elements

/* let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddnNums = numbers.filter(isOdd);

console.log(oddnNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
} */

/* const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAult);
const children = ages.filter(isChild);

console.log(children);

function isAult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
} */

/* const words = ["apple","banana","orange","kiwi","pomegranate","coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
} */

// 24. reduce() = reduce the elements of an array
//                to a single value

/* 
Ví dụ:
tính tổng
tính trung bình
đếm số lượng
gom object
shopping cart total


const prices = [5, 30, 10 ,25 , 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
} */

// sort() = methodf used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + sympols ) as strings

/* let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a,b) => b - a);

console.log(numbers); */

/* const people =[{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 5.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}

];

people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people); */
/* const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        array[i], array[random] = [array[random], array[i]];
    }    
}
 */

//  25. Object Creation = Saved a mount of information in 1 variables
/* 
const students = {
    name: "Nhi",
    age: 20,
    major: "Information Technology"
};

document.getElementById("result").textContent = `${students.name} is ${students.age} years old and studies ${students.major}`; */

// 26. Destructuring = take a data object fastly 

/* const person = {
    name: "Patrick",
    age: 37,
    city: "Bikini Bottom"
}

const {name,age,city} = person;

document.getElementById("infor").textContent =
`${name} is ${age} years old and lives in ${city}`;
 */
// 27. Spread Operator = Copy and Update object
/* 
const user ={ 
    name: "Sandy",
    age: 27
};

const updateUser = { 
    ...user,
    contry: "USA",
    age: 28
};

document.getElementById("output").textContent = `${updateUser.name} is ${updateUser.age} from ${updateUser.contry}`; */

// 28. JSON.stringify() = Convert object to JSON string

/* const product = { 
    name: "Laptop",
    price: 1000
};

const jsonString = JSON.stringify(product);

document.getElementById("jsonResult").textContent = jsonString; */

// 29. JSON.parse() = Convert JSON to Object

/* Server
↓
JSON string
↓
Frontend nhận
↓
JSON.parse()
↓
Object JS
↓
Hiển thị HTML */

/* const jsonData = '{"name":"Squidward","age":51}';

const person = JSON.parse(jsonData);

document.getElementById("parseResult").textContent = `${person.name} is ${person.age}`; */

// 30. Examble Combination

/* document.getElementById("btn").onclick = function(){
    const student = {
        name: "Nhi",
        age: 20,
        major: "Information Technology"
    }

    //destructuring
    const {name,age} = student;

    const updateStudent = { 
        ...student,
        country: "VietNam"
    };

    //object -> JSON
    const json = JSON.stringify(updateStudent);;

    //JSON -> object
    const parsed = JSON.parse(json);

    document.getElementById("result").textContent = `
Name: ${name}
Age: ${age}

JSON:
${json}

Parsed Object:
${parsed.name} from ${parsed.country}
`; 
}
*/
/* 
const students = { 
    name: "Patrick",
    major:"Information Technology",
}

const studentGpa = [8,9,10];
const {name,major} = students;



document.getElementById("calculatorBtn").onclick = function(){
    let total = studentGpa.reduce((sum,grade) => {return sum + grade},0); 
    let average = total / studentGpa.length;
    if(average >= 8 && average <=10){
        console.log("Excellent Student");
    }else if(average >= 5 && average < 8){
        console.log("Intermediate Student");
    }else if(average > 0 && average < 5) {
        console.log("Poor Student");
    }else{
        console.log("Please Enter the grade subject!!");
    }
    document.getElementById("result").textContent = `${students.name} has GPA ${average.toFixed(2)}`; 
}*/

// spread operator = .....allows an iterable such as an 
//                  array or string to be expanded 
//                  into seperate elements 
//                  (unpacks the elements)

/* let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum); */

/* let username = "Bro Code";
let letters = [...username].join("");

console.log(letters);
 */

/* let fruits = ["apple","orange","banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits,...vegetables, "eggs", "milk"];

console.log(foods); */

// rest parameters = (...rest) allow a function work with a variable
//                    number of arguments by building them into an array

//                    spread = expands an array into seperate elements
//                    rest = bundles seperate elements into array

/* function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "hambugar";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1,food2,food3,food4,food5);
const foods = getFood(food1,food2,food3,food4,food5);
console.log(foods); */

/* function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}


function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75,100,85,90,50);

console.log(`Your total is ${total}`); */

/* function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob","Squarepants","III");

console.log(fullName) */

// DICE ROLLER PROGRAM 

/* function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
        
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML  = images.join('');
    
} */

// 31. RANDOM PASSWORD GENERATOR

/* function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const sympolChars = "!@#$%^&*_+()=";

    let allowedChars ="";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? sympolChars : "";

    if(length <=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);
console.log(`Generated password: ${password}`); */

// 32. callback = a function that is passed as an argument
//                to another function

//                 used to handle asynchronous operations
//                 1. Reading a file
//                 2. Network requests
//                 3. Interacting with databases

//                 "Hey, when you're done, call this next"

/* sum(displayPage,1,2)

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
} */

//  33.fuction declaration = define a reusable block of code
//                           the performs a specific task 
//      1. Callbacks in asynchronous operations
//      2. Higher-Order Functions
//      3. Closures
//      4. Event Listeners


/* function hello(){
    console.log("Hello");
}
 */




// 33. function expressions = a way to define functions 
//                            as values or variables
/* setTimeout(function() {
    console.log("Hello");
}, 3000); */

/* const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element,3);
})

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})

function cube(element){
    return Math.pow(element,3);
    
}
    const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
})

console.log(oddNums); */

// 34.arrow fuctions = a concise way to wite function expressions 
//                   good for simple functions that you uses only once
//                  (parameters) => some code

/* const hello = (name) =>  console.log(`Hello ${name}`);

hello("Bro"); */
/* 
const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evenNums = numbers.filter((element)=> element % 2 === 0);
const oddnNums = numbers.filter((element)=> element % 2 !== 0);
const total = numbers.reduce((accumlator,element) => accumlator + element);

console.log(total); */

// 35. Object = a collection of related properties and/or methods 
//               Can re present real world objects (people,products ,places)
//              object = {key: value
//                        function(),}

/* const person1 = {
    firstName: "Spongebob",
    lastName:"Squarepants",
    age: 30,
    isEmployed:true,
    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}
const person2 = { 
    firstName: "Patrick",
    lastName:"Star",
    age: 20,
    isEmployed:false,
    sayHello: () => {console.log("hey! I am Patrick...")},
    eat: function(){console.log("I am eating roast beef, chicken, and pizza")},

}

person1.eat();
person2.eat(); */

//  36. this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//       person.name = this.name

/* const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat(); */

// constructor = special method for defining the
//               properties and methods of objects

/* function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year, 
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford","Mustang",2026,"red");
const car2 = new Car("Chevrolet","Camaro",2025,"blue");
const car3 = new Car("Dodge","Charger",2026,"silver");


car1.drive();
car2.drive();
car3.drive();
 */
//  37. querySelector
/* const title = document.querySelector(".title");
const description = document.querySelector(".description");
const button = document.querySelector("#changeBtn");
const input = document.querySelector("#nameBox");

// input event 
input.addEventListener("input",
    (event) => {
        title.textContent = `Hello ${event.target.value}`;
    }
);

// click event 
button.addEventListener("click", () => {
    
    // toggle dark mode
    document.body.classList.toggle("dark");

    //toggle title style 
    title.classList.toggle("active");

    //change description 
    description.textContent = "Theme changed successfully!"

}); */

// 38. querySelectorAll

/* const tasks = document.querySelectorAll(".task");
const button = document.querySelectorAll("#toggleBtn");

button.addEventListener("click", () => {

    tasks.forEach((task) => {
        task.classList.toggle("done");
    });

}); */

// 39. innerHTML

/* const box = document.querySelector("#box");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    box.innerHTML = `<h1> Hello JavaScripts </h1>
                     <p>This content was added dynamically </p>   
    `;
}); */

/* // 40.classList.add()

const box = document.querySelector("#box");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    box.classList.add("active");
}); */

// 41. keydown
/* const event = document.querySelector("event");

document.addEventListener("keydown" ,(event) =>{
    console.log(event,key);
});
 */

// 42. event.preventDefault()
/* const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Login successful");
}); */

const button =
document.querySelector("#themeBtn");


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme =
localStorage.getItem("theme");


// if dark mode was saved
if(savedTheme === "dark"){

    document.body.classList.add("dark");
}


// =========================
// BUTTON CLICK EVENT
// =========================

button.addEventListener("click", () => {

    // toggle dark class
    document.body.classList.toggle("dark");


    // =========================
    // SAVE THEME
    // =========================

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme", "dark");

    }else{

        localStorage.setItem("theme", "light");
    }
});