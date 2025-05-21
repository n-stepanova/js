console.log("Дана строка. Выведите в консоль длину этой строки.");

function getStringSize(str){
    return(str.length);
}

console.log(getStringSize("hello"));
console.log(getStringSize("abracadabra"));

console.log("Дана строка. Выведите в консоль последний символ строки.");

function getLastCharOfTheString(str){
    return(str[str.length-1]);
}

console.log(getLastCharOfTheString("hello"));
console.log(getLastCharOfTheString("abracadabra"));