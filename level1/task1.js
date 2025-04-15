function showTaskAndNumber(number){
    console.log("Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.");
    console.log(`Дано число: ${number}`);
}

function checkPositiveOrNegative(number){
    if(number>=0){
        console.log("Положительное");
    }else{
        console.log("Отрицательное");
    }
}

let n = 3;
showTaskAndNumber(n);
checkPositiveOrNegative(n);