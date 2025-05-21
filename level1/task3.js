console.log("Дано число. Проверьте, четное оно или нет.");

function checkNumber(num){
    if(num%2!=0){
        return("Нечетное");
    }
    return("Четное");
}

function getRandomNumber(){
    return(Math.floor(Math.random()*(100-0)+0));
}

const num = getRandomNumber();
console.log("Число: " + num + " - " + checkNumber(num));