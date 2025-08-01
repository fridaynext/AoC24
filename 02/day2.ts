// Day 2 - Similarity Score

// Same as Day 1 to process the data
import * as fs from 'fs';

const filePath: string = '../01/day1.txt';
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

// Use filter to use value from first array as index and multiply it by how many times it appears in second array
// Then sum all the values to get the total similarity
let similarityScore: number = 0;

similarityScore = firstColumnValues.reduce((total, current) =>
    total + current * (secondColumnValues.filter((secondValue) => secondValue === current).length),
0);

// `npx tsx day2.ts` to run the script
console.log("Similarity Score:", similarityScore);