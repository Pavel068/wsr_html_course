// Переменные, константы
// const a = 15;
// let b = 7;

// let flag_1 = true;
// let flag_2 = false;

// console.log(flag_1 || flag_2);

// Оператор ветвления
// let a = '7';
// let b = 8;

// if (a == b) {
//     console.log('А равно Б');
// }

// if (a == b) {
//     console.log('А равно Б');
// } else if (a > b) {
//     console.log('А больше Б');
// } else {
//     console.log('А меньше Б');
// }

// Оператор повторения (цикла)
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log('Конец цикла');

// let a = 100;
// while (a > 10) {
//     console.log(1);
//     a--;
// }

// do {
//     console.log(a);
//     a--;
// } while (a > 10)

// ПРОСТОЕ ЧИСЛО - ДЗ
// let a = 10;
// let b = 20000;

// a % b

// let a = [1, 2, 3, 4];
// a.push(123);
// console.log(a);

// function sayHello() {
//     console.log('Привет всем!');
// }
// sayHello();

// function sayHelloTo(name, age, city) {
//     console.log('Привет, ' + name);
//     console.log(`Привет, ${name}`);
// }
// sayHelloTo('Андрей',16,'tambo');

// function solve(a, b, c) {
//     // ax^2 + bx + c = 0
//     let D = b * b - 4 * a * c;
//     if (D < 0) {
//         return null;
//     } else if (D === 0) {
//         return -b / (2 * a)
//     } else {
//         return [
//             (-b + Math.sqrt(D)) / (2 * a),
//             (-b - Math.sqrt(D)) / (2 * a)
//         ];
//     }
// }

// let roots = solve(4, 16, 5);
// console.log(roots);

// let person = {
//     name: 'Alex',
//     age: 30,
//     city: 'Tambov',
//     is_car: true,
//     sayHello: () => {
//         return 'Hello, ' + person.name;
//     }
// }

// console.log(person.name);
// console.log(person.sayHello());

document.querySelector('#add').onclick = function () {
    // let elem = document.createElement("div");
    // document.querySelector('.flex').appendChild(elem);

    // document.querySelector('#add').style.backgroundColor = '#ff0000';

    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;

    for (let i = a; i <= b; i++) {
        let flag = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            var newtext = document.createTextNode(i);
            document.querySelector('#result').appendChild(newtext)
        }
    }
}