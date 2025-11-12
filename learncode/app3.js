import readfile from "readline-sync"

let Fname = readfile.question("Enter your Name:- ")
let age = readfile.questionInt("Enter your age:- ")

let gender = readfile.question("Enter your gender (M/F/O):- ") 
if (gender == "M" || gender == "m" || gender == "F" || gender == "f" || gender == "O" || gender == "Male" || gender == "male" || gender == "female" || gender == "Female" || gender == "Other " || gender == "other"){
    
}else{
    console.log("invalid gender please re enter, ");
    gender = readfile.question("Enter your gender:- ")
}
let city = readfile.question("Enter your city name:- ")
let country = readfile.question("Enter your country name:-  ")
let email = readfile.questionEMail("Enter your email:- ")
let phone = readfile.questionInt("Enter your Phone number:- ")
let  occupation = readfile.question("Enter your occupation:- ")
let hobby = readfile.question("Enter your hobby:- ")
let Favouriteprogramming = readfile.question("Enter your Favourite Programming Language:- ")
let YearsofEx = readfile.questionInt("Entery your Years of Experience:- ")
let FavouriteFood = readfile.question("Enter your favourite food:- ")
let favouritemovie = readfile.question("Enter your Favourite movie:- ")
let favouritecolor = readfile.question("Enter your favourite Color:- ")
let areyouastudent = readfile.question("Are you a student (y/n):- ")
if (areyouastudent == "Y" || areyouastudent == "y" || areyouastudent == "N" || areyouastudent == "n" || areyouastudent == "yes" || areyouastudent == "No"){
   
}else{
    console.log("invalid entry please re enter, ");
    areyouastudent = readfile.question("Are you a student (y/n) ")
}

let coding = readfile.question("Do you like coding (y/n) ")
if (coding == "Y" || coding == "y" || coding == "N" || coding == "n" || coding == "yes" || coding == "No"){
 
}else{
    console.log("invalid entry please re enter, ");
    coding = readfile.question("Do you like coding (y/n) ")
}

let biggest = readfile.question("What's your biggest goal ")
let pet = readfile.question("Do you have a pet? (If yes, name it or type 'No') ")

let music = readfile.question("Favourite music genre : ")
let drinking = readfile.question("Did you stop drinking (y/n):- ")
 let pita =  readfile.question("Matlab tu pita tha:- (y/n) ")




console.log("");
console.log("------- summary ---------");
console.log("Your name is :",Fname);
console.log("Your are" ,age , "year's old");
console.log("Your gender is ", gender);
console.log("Your live in ", city);
console.log("Your are from ", country );
console.log("Your email is :" ,email);
console.log("Your phone no:", phone);
console.log("Your occupation is :",occupation);
console.log("Your Hobby is :", hobby);
console.log("Your favourite programming language is : ", Favouriteprogramming);
console.log("Your Years of Experience is: ", YearsofEx );
console.log("Your facourite Food is :", FavouriteFood);
console.log("Your favourite movie is :", favouritemovie);
console.log("Your favourite colore is :", favouritecolor);
console.log("Are you a student: ", areyouastudent);
console.log("Do you like coding:", coding);
console.log("Your biggest goal is:", biggest);
if (pet == "No" || pet == "no"){
    console.log("you have ",pet, "pet");
}else{
    console.log("your pet name is ",pet);
}
console.log("Favourite music genre:" ,music);
if(drinking == "y" || drinking == "Y" ){
    console.log("chal Jhutta");
}else if (drinking == "n" || drinking == "N"){
    console.log("good boy");
}
console.log("matlab tu pita tha ");