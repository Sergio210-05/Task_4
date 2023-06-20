
const num = Math.floor(Math.random() * 100);
console.log(num);

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const fs = require('node:fs');
// const { rejects } = require('node:assert');

const rl = readline.createInterface({ input, output });

function gamePromise(counter) {
    return new Promise((resolve, reject) => {
        rl.question(`Текущая попытка: ${counter}. Попробуйте угадать число: `, (answer) => {
            resolve(answer);
        });
    });
};


// const game = gamePromise()
// game.then()

async function question(counter=0) {
    while (true) {
        ++counter;
        const answer = await gamePromise(counter);
        if (num===+answer) {
            console.log(`Поздравляем! Вы угадали! Вам потребовалось ${counter} попыток.`);
            rl.close()
            break;
        };
        console.log('Вы не угадали, попробуйте ещё раз');
    };
};

question();