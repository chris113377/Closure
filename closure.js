// example 1

function counter (){
  let count = 0;
  return function increment(){
    return ++count;
  }
}

let myCounter = counter();
myCounter();


// example 2 => closure with arrow function

let func = function (){
    let arr = ['a','b','c'];
    return num => arr[num];
}();

console.log(func(2));

function returnArr (){
   let arr = ['a','b','c'];
   return function a(num) {
   return arr[num];
  }
};
let func = returnArr();


// CodeMasters example

function strBuilder(str) {
	return function next(v){
		if (typeof v == "string") {
			return strBuilder(str + v);
		}
		return str;
	};
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");

