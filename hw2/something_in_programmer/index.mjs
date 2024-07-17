import chalk from 'chalk';

function cube(numb) {
    return numb ** 3;
}
const total = cube(10);
const info = 'Число в кубе = '  + total;
const result = (total >=200) ? chalk.blue(info) : chalk.red(info);
console.log(result);
