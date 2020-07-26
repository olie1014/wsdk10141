const input = document.querySelector('#input');
const check = document.querySelector('#check');
const comment = document.querySelector('#result');


let number = [1,2,3,4,5,6,7,8,9];
let collectNumber = [];

for (let i = 0; i < 4; i++) {
    let selectNumber = number.splice(Math.floor(Math.random() * (9 - i)),1)[0];
    collectNumber.push(selectNumber);
    
}
console.log(collectNumber.join(''));

check.addEventListener('click', () => {
    let answer = input.value;
    if (answer== collectNumber.join('')) {   
        result.textContent = "Congrats! You hit the ball";
    } else {
        
        let arryAnswer = answer.split('');
        let strike = 0;
        let ball = 0;
        
        for (let i = 0; i < 4; i++) {
            if (arryAnswer[i] == collectNumber[i]){
                strike += 1;
            } else if (collectNumber.indexOf(Number(arryAnswer[i])) > -1) {
                ball += 1;
            }
            result.textContent = ball+' ball '+strike + ' strike'
        }
    }
    }
)

