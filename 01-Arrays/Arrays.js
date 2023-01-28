//https://www.w3schools.com/jsref/jsref_obj_array.asp

Arreglo1= [1,2,3,4];
Arreglo2 = [5,6,7,8];

//concat() array1.concat(array2, array3, ..., arrayX)
Arreglo3= Arreglo1.concat(Arreglo2);
console.log("concat: ", Arreglo3);

//constructor
let constructor = Arreglo3.constructor; 
console.log(constructor);

//copyWithin() array.copyWithin(target, start, end)
Arreglo3.copyWithin(2,3,5);
console.log("copyWithin: ",Arreglo3);

//entries() array.entries()
var letras = ['a', 'b', 'c'];
let entries = letras.entries();
for (let x of entries) {
    console.log("entries: ",entries);
}

//every() array.every(function(currentValue, index, arr), thisValue)
function mayorQue10(elemento, indice, array) {
    return elemento > 10;
  }
console.log("every: ",Arreglo3.every(mayorQue10));

//fill() array.fill(value, start, end)
Arreglo4= Arreglo3.fill(8,2,4);
console.log("fill: ",Arreglo4);

//filter() array.filter(function(currentValue, index, arr), thisValue)
function mayorQue5(elemento, indice, array) {
    return elemento > 5;
  }
console.log("filter: ",Arreglo4.filter(mayorQue5));

//find() array.find(function(currentValue, index, arr), thisValue)
function mayorQue5(elemento, indice, array) {
    return elemento > 5;
  }
console.log("find: ",Arreglo4.find(mayorQue5));

//findIndex() array.findIndex(function(currentValue, index, arr), thisValue)
function mayorQue5(elemento, indice, array) {
    return elemento > 5;
  }
console.log("findIndex: ",Arreglo4.findIndex(mayorQue5));

//forEach() array.forEach(function(currentValue, index, arr), thisValue)
function menorQue5(elemento, indice, array) {
    return elemento < 5;
  } 
console.log("forEach: ",Arreglo4.forEach(menorQue5));

//from() Array.from(object, mapFunction, thisValue)
var letras2 = Array.from("ABCDEFG");
console.log("from: ",letras2);

//includes() array.includes(searchElement, start)
console.log("includes: ",Arreglo4.includes(8));

//indexOf() array.indexOf(searchElement, start)
console.log("indexOf: ",Arreglo4.indexOf(8));

//isArray() Array.isArray(object)
asd = "asd"
console.log("isArray: ",Array.isArray(asd));
console.log("isArray: ",Array.isArray(Arreglo4));

//join() array.join(separator)
console.log("join: ",Arreglo4.join(", "));

//keys() array.keys()
var letras3 = ['a', 'b', 'c'];
const keys = letras3.keys();
let text = "";
for (let x of keys) {
  text += x;
}
console.log(text)

//lastIndexOf() array.lastIndexOf(searchElement, start)
console.log("lastIndexOf: ",Arreglo4.lastIndexOf(8));

//length array.length
console.log("length: ",Arreglo4.length);

//map() array.map(function(currentValue, index, arr), thisValue)
function multiplicar(elemento, indice, array) {
    return elemento * 2;
  }
Arreglo5 = Arreglo4.map(multiplicar);
console.log("map: ",Arreglo5);

//pop() array.pop()
console.log("pop: ",Arreglo5.pop(), Arreglo5);

//push() array.push(element1, element2, ..., elementN)
console.log("push: ",Arreglo4.push(9,10,11), Arreglo4);

//reduce() array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function sumarValores(total, valor, indice, array) {
    return total + valor;
  }
console.log("reduce: ",Arreglo4.reduce(sumarValores), Arreglo4);

//reduceRight() array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
function restarValores(total, valor, indice, array) {
    return total - valor;
  }
console.log("reduceRight: ",Arreglo4.reduceRight(restarValores), Arreglo4);

//reverse() array.reverse()
Arreglo4Inverso = Arreglo4.reverse();
console.log("reverse: ",Arreglo4Inverso);
Arreglo4 = Arreglo4.reverse();

//shift() array.shift()
console.log("shift: ",Arreglo4.shift(), Arreglo4);

//slice() array.slice(start, end)
console.log("slice: ",Arreglo4.slice(1,3));

//some() array.some(function(currentValue, index, arr), thisValue)
function mayorQue4(elemento, indice, array) {
    return elemento > 4;
  }
console.log("some: ",Arreglo4.some(mayorQue4));

//sort() array.sort(function(a, b){return a-b}) array.sort(compareFunction)
function ordenar(a, b) {
    return a - b;
  }
console.log("sort: ",Arreglo4.sort());
console.log("sort: ",Arreglo4.sort(ordenar));

//splice() array.splice(index, howmany, item1, ....., itemX)
console.log("splice: ",Arreglo4.splice(1,2), Arreglo4);
console.log("splice: ",Arreglo4.splice(1,2,9,3), Arreglo4)

//toString() array.toString()
console.log("toString: ",Arreglo4.toString());

//unshift() array.unshift(element1, element2, ..., elementN)
console.log("unshift: ",Arreglo4.unshift(9,10,11), Arreglo4);

//valueOf() array.valueOf()
console.log("valueOf: ",Arreglo4.valueOf());

//Symbol.iterator array[Symbol.iterator]()
var letras4 = ['a', 'b', 'c'];
const iterator = letras4[Symbol.iterator]();
console.log(iterator.next().value);

//Symbol.unscopables array[Symbol.unscopables]()
var letras5 = ['a', 'b', 'c'];
const unscopables = letras5[Symbol.unscopables];
console.log(unscopables);
