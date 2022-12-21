// string w JS jest typem prostym (z ang. primitive) -- a takie są niemutowalne (nie można zmienić ich wartości)
let str = "tekst";
console.log(str);
str[0] = "X";   // co ciekawe, konsola nie wypluwa błędu
console.log(str);
// a zatem wszelkie operacje na stringach (np. konkatenacja: str1 + str2) tworzą nowe stringi