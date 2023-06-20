
const num = Math.floor(Math.random() * 100);
console.log(num);

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const fs = require('node:fs')


const rl = readline.createInterface({ input, output });

function game(counter = 0) {
    // let counter = 0;
    if (counter === 1) {
        fs.writeFile('gameLog.txt', '', (err) => {
            if (err) {console.log('Ошибка записи файла!');}
        });
    }
    rl.question(`Текущая попытка: ${++counter}. Попробуйте угадать число: `, (answer) => {
        fs.appendFile('gameLog.txt', `Попытка №${counter}, введено число: ${+answer}\n`, (err) => {
            if (err) {console.log('Ошибка записи файла!');}
        });
        if (num === +answer) {
            console.log(`Поздравляем! Вы угадали! Вам потребовалось ${counter} попыток.`);
            fs.appendFile('gameLog.txt', `Угадано на попытке №${counter}. Правильный ответ: ${+answer}`, (err) => {
                if (err) { console.log('Ошибка записи файла!');}
            });
            rl.close();
            return;
        }
        console.log('Вы не угадали, попробуйте ещё раз');
        game(counter);
    })
}

game();
