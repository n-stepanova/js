
const strs = ["hello", "abracadabra"] ;

function getStringSize(str){
    console.log("Дана строка. Выведите в консоль длину этой строки.");
    return(str.length);
}

function getLastCharOfTheString(str){
    console.log("Дана строка. Выведите в консоль последний символ строки.");
    return(str[str.length-1]);
}

function getRandomStringFromArray(arr){
    const s = arr.length;
    return Math.floor(Math.random()*(s-0)+0);
}

function show(value){
    console.log(value);
}

const str = strs[getRandomStringFromArray(strs)];

show(str);
show(getStringSize(str));
show(getLastCharOfTheString(str));