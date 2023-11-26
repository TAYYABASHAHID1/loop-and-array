
let multiArray = [];

multiArray[0] = []; 
multiArray[1] = [];

let number1 = 3;
let number2 = 4;
let multiArray2 = new Array(number1);
for (let i = 0; i < number1; i++) {
    multiArray2[i] = new Array(number2).fill(0);
}
console.log(multiArray2)
//   2.
var matrix= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


document.write("<p>Matrix:</p>");
document.write("<table>");
for (let i = 0; i < matrix.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < matrix[i].length; j++) {
        document.write("<td>" + matrix[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// 3.


document.write("<p>Numeric counting from 1 to 10:</p>");
document.write("<ul>");
for (let i = 1; i <= 10; i++) {
    document.write("<li>" + i + "</li>");
}
document.write("</ul>");
// 4.


var prompt1=prompt("Enter the number for the multiplication table:")
var prompt2=prompt("Enter the length of the multiplication table:")


document.write("<p>Multiplication table of " + prompt1 + " up to " +prompt2 + ":</p>");
document.write("<ul>");

for (let i = 1; i <= prompt2; i++) {
    let result = prompt1 * i;
    document.write("<li>" + prompt1 + " * " + i + " = " + result + "</li>");
}

document.write("</ul>");
// 5.
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];



for (let i = 0; i < fruits.length; i++) {
    document.write("<li>" + fruits[i] + "</li>");
}
// 8,

let A = [24, 53, 78, 91, 12];

function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let largestNumber = findLargestNumber(A);
console.log("The largest number in the array is:", largestNumber);

// 9.

let A = [24, 53, 78, 91, 12];

function findSmallestNumber(arr) {
    let smallest = arr[0]; // Assume the first element is the smallest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

let smallestNumber = findSmallestNumber(A);
console.log("The smallest number in the array is:", smallestNumber);

// 10.

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
