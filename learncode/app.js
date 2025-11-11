
import readline from "readline-sync";

// const read = require("readline-sync") before 2015

let FullName = readline.question("What is your name ? ")
let age = readline.questionInt("What is your age? ")
let email = readline.questionEMail("Enter your email ")
let college = readline.question("Enter your college name ")
let phone = readline.questionInt("Enter your phone number ")

console.log("My name is ",FullName);

if(age>100){
     console.log("Invalid age");
}else{
     console.log("my age is",age);
}


console.log("My email is ",email);
console.log("I am in ", college,"college");
console.log("your Phone no. is", phone);
