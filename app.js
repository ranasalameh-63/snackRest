//Q1
// let userName = prompt("Enter your name");
// let userGender = prompt("Enter your Gender");

// if (userGender === 'Female' || userGender === 'female') {
//     window.alert("Welcome Ms " + userName);
// } else if (userGender === 'Male' || userGender === 'male') {
//     window.alert("Welcome Mr " + userName);
// } else {
//     window.alert("Welcome " + userName);
// }

// //Q1 part 2
// let userOrder = prompt("Would you like to order shawarma, zinger, or burger? (yes/no)");
// let userChoice = prompt("Write the name of the order (shawarma, zinger, burger):");
// if (userOrder === 'yes' || userOrder==='Yes') {
//     if (userChoice === "shawarma" || userChoice === "zinger" || userChoice === "burger") {
//         window.alert("Your order is being prepared now!");
//     } else {
//         window.alert("Sorry " + userName + ", we only serve shawarma, zinger, or burger.");
//     }
// } else if (userOrder === 'no'||userOrder==='No') {
//     window.alert("Ok it's up to you , thank you");
// }
// else {
//     window.alert("Invalid response. Please enter 'yes' or 'no'.");
// }
// console.log("Done"+ ""+userName +"Your order is"+"" +userChoice)
// //////////////////////////////////////////////////
// let userAge = prompt("Enter Your age");


// /////////////////////////////////////////
// ////////////// Part 1/////////////////
// let par1 =document.createElement('p');
// let par = document.createElement('p');
// let ol = document.createElement('ol')
// let Gender = document.createElement('li');
// let age = document.createElement('li');
// let order = document.createElement('li');
// //////data
// par1.textContent = "Welcome to Snack restaurant, the ultimate destination for snack lovers! ";
// par.textContent = userName;
// Gender.textContent =userGender;
// age.textContent = userAge;
// order.textContent = userChoice;

// //// call div
// let div = document.getElementById('hero');


//////append
// div.appendChild(par);
// par.append(ol);
// ol.append(Gender);
// ol.appendChild(age);
// ol.appendChild(order);


/////////// Event task

document.getElementById('button').addEventListener('click',function(){

let username = document.getElementById('usernameInput').value;
let userage = document.getElementById('userageInput').value;
let usergender = document.getElementById('usergenderInput').value;

let order =[];
if (document.getElementById('shawerma').checked) order.push('shawerma');
if (document.getElementById('Zinger').checked) order.push('Zinger');
if (document.getElementById('Burger').checked) order.push('Burger');

let choice = document.getElementById('Sandwish').checked ? 'Sandwish' :
document.getElementById('Combo').checked ? 'Combo' : 'None';

let output = "Name :" +username +"<br>"+ "Age :" +userage +"<br>"+ "Gender :" +usergender +"<br>"+"Order :"+order+"<br>"+"Order type :"+choice;
document.getElementById('output').innerHTML = output;
});

