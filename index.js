// Iteration 1: Names and Input

let hacker1 = 'Brad';
console.log("The diver's name is " + hacker1)

let hacker2 = 'Anthony'
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) { 
    console.log("The driver has the longest name, it has" + hacker1.length + "characters.");
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + "characters!");
}


// Iteration 3: Loops
// 3.1
let hacker1UpCase = '';
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpCase.trim());

// 3.2
let hacker2ReverseOrder = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2ReverseOrder += hacker2[i];
}
console.log(hacker2ReverseOrder);

// 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?")
}
