// Day 1 of Advent of Code 2024. Let's go!
//
// Typescript time!
//
// Need to find the difference between both lists.
//   stored as XXXXX   XXXXX<br> for 1000 rows
//   first could populate some arrays with these values, so we can compare them

import * as fs from 'fs';

const filePath: string = './day1.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

// Split each element value from lines into 2 separate arrays for first&nbsp;&nbsp;&nbsp;second,
// so we can have all the first column results separate from second column
let firstColumnValues: number[] = [];
let secondColumnValues: number[] = [];

// Create arrays for each column
for (let i = 0; i < lines.length; i++) {
    const [first, second] = lines[i].split('   ');
    firstColumnValues.push(Number(first));
    secondColumnValues.push(Number(second));
}

// Remove duplicates from each array and sort
firstColumnValues.sort((a, b) => a - b);
secondColumnValues.sort((a, b) => a - b);

// Compare each pair of values from the two arrays and sum all the differences
let totalDifference: number = 0;
for (let i = 0; i < firstColumnValues.length; i++) {
    totalDifference += Math.abs(firstColumnValues[i] - secondColumnValues[i]);
    console.log("current diff: ", totalDifference);
}

// `npx tsx day1.ts` to run the script
console.log("Total Delta: ", totalDifference);