const POSITIVE = "Положительное";
const NEGATIVE = "Отрицательное";
 
function showTaskAndNumber(number){
    console.log("Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.");
    console.log(`Дано число: ${number}`);
}

function checkPositiveOrNegative(number){
    let numberType = POSITIVE;
    if(number<0){
        numberType=NEGATIVE;
    }
    console.log(numberType);
}

function generateRandomNumber(){
    return Math.floor(Math.random()*(100-(-100))-100); //диапазон от -100 до 100
}

let n = generateRandomNumber();
showTaskAndNumber(n);
checkPositiveOrNegative(n);