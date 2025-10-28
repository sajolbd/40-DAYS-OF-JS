// Generate a Pyramid Pattern using Nested Loop

for(let i=1;i<=5;i++){
    let line='';
    for(let j=1;j<=i;j++){
        line += '*';
    }
    console.log(line);
}


// Craete Multiplication Table
let num = parseInt(prompt("Enter a number to generate its multiplication table:"));

for(let i=1;i<=10;i++){
    console.log(num + " x " + i + " = " + (num*i));
}

// Find the summation of all odd numbers between 1 to 500
let sum = 0;
for(let i=1;i<=500;i++){
    if(i%2 !== 0){
        sum += i;
    }
}
console.log("The summation of all odd numbers between 1 to 500 is: " + sum);


// Skipping Multiples of 3
for(let i=1;i<=20;i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i);
}


// Reverse Digits of a Number (Using while loop)
let digit = 1234;
let reverse = 0;
while(digit > 0){
    let rem = digit % 10;
    reverse = reverse * 10 + rem;
    digit = Math.floor(digit / 10);
} 
console.log("The reverse of the number is: " + reverse);