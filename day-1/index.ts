// https://adventofcode.com/2023/day/1

import {readFile} from "../utils";

const EXAMPLE_FILE_NAME = './example.txt';
const INPUT_FILE_NAME = './input.txt';

function parseLine(line: string): number {
    let firstNum = -1;
    let lastNum = -1;

    for (let char of line) {
        try {
            const num = Number.parseInt(char);
            if (isNaN(num)) continue;

            if (firstNum === -1) firstNum = num;
            lastNum = num;
        } catch (ignored){}
    }

    return firstNum * 10 + lastNum;
}

(async function main(){
    const exampleContent = await readFile(INPUT_FILE_NAME);
    const res = exampleContent.split('\n')
        .map(line => parseLine(line))
        .reduce((acc, curr) => acc + curr, 0);
    console.info('Result:', res);
})();
