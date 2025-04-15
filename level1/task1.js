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

let n = 0;
showTaskAndNumber(n);
checkPositiveOrNegative(n);