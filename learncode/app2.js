import readline from "readline-sync"

let Name = readline.question("What is your Name😄 : ")
let age = readline.questionInt("What is your age 🎂: ")
let code = readline.question("Likes coding [y/n")

console.log("Your name is ",Name);
console.log("Your age is ", age);


if (code == "Y" || code == "y" || code == "yes"){
    console.log("Likes coding : Yes");

}else if (code == "X") {
    console.log("Likes coding : No");
}

