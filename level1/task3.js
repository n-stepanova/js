console.log("Дано число. Проверьте, четное оно или нет.");

function checkNumber(num){
    if(num%2!=0){
        return("Нечетное");
    }
    return("Четное");
}

console.log(checkNumber(8));