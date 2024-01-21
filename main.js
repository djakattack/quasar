console.log("main.js loaded");
// VARIABLES
let score = 0;
let min;
let max;
let lowBuyin = -20;
let highBuyin = -200;

// FUNCTIONS

// RNG 4-7
const fourSeven = () => {
    let min = 4;
    let max = 7;

    console.log(`Random Number: ${Math.floor(Math.random()*(max - min +1) + min)}`);    
}

const oneEight = () => {
    let min = 1;
    let max = 8;

    console.log(`Random Number: ${Math.floor(Math.random()*(max - min +1) + min)}`);;
}

// Math.floor(Math.random()*(max - min)+ min);

// RNG 1-8


// "charge" player 20 or 200 credits
// generate 4-7
// generate 1-8
// payout
// add to overall score