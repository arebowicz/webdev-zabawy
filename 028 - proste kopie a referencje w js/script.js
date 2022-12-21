// typy proste - przekazywane są kopie wartości
let a = 10;
let b = a;
a++;
console.log(a, b);  // 11, 10

// obiekty - do obj2 przypisaliśmy referencję
let obj = { a: 10 };
let obj2 = obj;
obj.a++;
console.log(obj.a, obj2.a);   // 11, 11