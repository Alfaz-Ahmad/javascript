"use strict";

let num = 33;
let numInString = "56";
let numInNumber = Number(numInString);

console.log(typeof(num));               //number
console.log(typeof(numInString));       //string
console.log(typeof(numInNumber));       //number


let val1 = "s2t";
let val2 = Number(val1);

console.log(typeof(val1));      //string
console.log(typeof(val2));      //number
console.log(val2);              //NaN (Not a Number)


let a = null;
let b = Number(a);          //convert null to 0

console.log(typeof(a));     //object    
console.log(typeof(b));     //number
console.log(b);             //0


let bool1 = 1;              //true for any non zero val or non empty string otherwise false
let bool2 = Boolean(bool1);

console.log(typeof(bool1));     //number
console.log(typeof(bool2));     //boolean
console.log(bool2);             //true


let anyNum = 33;            //assign a value to variable 
let anyStr = String(anyNum);

console.log(typeof(anyNum));    //number
console.log(typeof(anyStr));    //string
console.log(anyStr);            //33

//Operations --------------------------------

let val = 3;
let negval = -val;
console.log(negval);        //-3 (negative value of val)


let str1 = "hello";
let str2 = "world!";
let str3 = str1 + " " + str2;

console.log(str3);      //hello World!

console.log(1+2);           //3
console.log("1"+2);         //12
console.log(1+"2");         //12
console.log("1"+"2");       //12
console.log("2"+5+9);       //259
console.log(2+5+"9");       //79
console.log(2+5+"9"+"4");   //794


console.log(true);          //true
console.log(-true);         //-1
console.log(-false);        //-0
console.log(+false);        //0