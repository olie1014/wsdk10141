const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let answer = [
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10))
];

answer[0] + answer[1] + answer[2] + answer[4];

let count = 0;

check.addEventListner('click', () => {
    const value = input.value
    if (value && value.length === 4) {
        if (answer === input) {

        }
    }
});

