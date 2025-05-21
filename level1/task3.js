const numbers = [3,6,23];

console.log("Дано число. Проверьте, четное оно или нет.");

function checkNumber(num){
    if(num%2!=0){
        return("Нечетное");
    }
    return("Четное");
}

function getRandomNumberFromArray(arr){
    return(Math.floor(Math.random()*(arr.length-0)+0));
}


const num = numbers[getRandomNumberFromArray(numbers)];
console.log("Число: " + num + " - " + checkNumber(num));