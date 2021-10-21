// let hell = "xyz"
// console.log(hell);

// let a = "7";
// let b = {c:5, d:7,}
// let f = undefined;
// console.log(typeof(f));

// console.log(9 + "5");
// console.log(9 - "5");
// console.log(9 * "5");
// console.log("9" - "you");
// console.log(true + true); = 2 because true = 1 and 1+1+=2
// console.log(flase % true); 

//  var iAm = null;
//  var iAmNot;

//  console.log(iAm);
//  console.log(typeof(iAm));
//  console.log(iAmNot);
//  console.log(typeof(iAmNot));

// let a = 4;
// let b = 5;

// output a=5 and b=4;

// swap using third variable
// let c = b;
// b=a;
// a=c;
// console.log(b);
// console.log(a);

// without using varibale
// a = b+a; //9
// b = a - b; // 4
// a = a - b;
// console.log(a);
// console.log(b);

// var tomar = "rain";

// if (tomar == "rain"){
// console.log("take raincoat");
// } else {
// console.log("no need to take raincoat");
// }

// let x = "25";
// if (x > "27"){
//     console.log("yes");
// }
// else {
//     console.log("no")
// }

// let myNoti = 17;

// if (myNoti >= 18){
//     console.log("you are eligible for vote")
// } else {
//     console.log("not now")
// }

// conditional (ternery) operator
// variablename = (condition)? value1:value2

// var age = 98312;
// age = (age >= 18)? "yes": "no"
// console.log(age);
// var year = new Date().getFullYear;
// debugger
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if (year % 400 === 0){
//             console.log("this is leap year")
//         } else {
//             console.log("this is not leap year")
//         }

//     }else {
//         console.log("this is leap year")
//     }

// }else {
//     console.log("Not A Leap Year");
// }

// falsy value


// if (x = true){
//     console.log("right")
// } else{
//     console.log("wrong")
// }

// truthy and falsy?
// we have total 5 falsy value eg. 0, undefined, "", NaN, Null and false is false anyway

// if (score = ""){
//     console.log("we won the game")

// }else {
//     console.log("we lose the game")
// }

// let age = 1436;
// x = (age >= 18) ? "good" : "bad";
// console.log(x);


// else if method

// var area = "rectangle";
// var PI = 3.142, l=5, b=4, r=3, h=6;
// circle = PI*r**2;
// traingle = l*b*h;
// rectangle = l*b;
// if(area == "circle"){
//     console.log(" the area of circle is:" + circle)
// }else if(area == "rectangle"){
//     console.log(" the area of rectangle is:" + rectangle)
// }else if(area == "traingle"){
//     console.log(" the area of traingle is:" + traingle)
// }else{
//     console.log("Please enter valid data")
// }

// switch statements

// var area = 'cjhwebhjcjbhbw';
// var PI = 3.142, l=5, b=4, r=3, h=6;

// circle = PI*r**2;
// traingle = l*b*h;
// rectangle = l*b;

// switch(area){
//     case 'rectangle':
//         console.log(" the area of rectangle is:" + rectangle);
//         break;

//     case 'circle':
//         console.log(" the area of circle is:" + circle);
//         break;

//     case 'traingle':
//         console.log(" the area of traingle is:" + traingle);
//         break;

//     default:
//         console.log("pleae enter valid data");
// }

// while loop statement

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// var num = 17;
// // block scope - all the rule applied in the curly braket is block scope
// while(num <= 100){
//     console.log(num);
//     num++;
// }

// var slNo = 17;
// while(slNo <= 30){
//     console.log(slNo);
//     slNo++;
// }

// var num = 45;
// do {
//      console.log(num);
//         num++;
//      } while(num <= 30);

// var i = 8;
// debugger;
// for(; i<10; i++){
//     console.log(i);
// }

// challenge time
// write a table of 6?

// var t = 8;
// for(var i=1; i<=20; i++){
//     console.log(t +" * "+ i + " = " + t*i);
// }

//function


// function sum(){
//     let a = 4, b = 3;
//     return a+b; 
// }
// console.log(sum());

// for remove paranthesis from function  and we should make function statement like below;
// var sum = sum();

// function sum(a,b){
//     var total = a+b;
//     console.log(total)
// }
// sum(value, value)

// var funExp = sum();
// funExp;


// function sum(){
//     let a = 7, b = 3;
//     return a+b; 
// }

// // for remove paranthesis from function  and we should make function statement like below;
// var sum = sum();
// console.log(sum);

// anonymous function


// var sum = function(a,b){
    
//     return a+b;
// }
// var total = (sum(4,3))
// var total1 = (sum(4,3))

// console.log(total)
// console.log(total > total1)


// template literals
// use previoys table function


// let a = 78;
// for (let i=1; i<=10; i++){
 
// console.log( `${a} * ${i} = ${a*i}` );
// }

// var t = 8;
// for(var i=1; i<=20; i++){
//     console.log(t +" * "+ i + " = " + t*i);
// }

// default parameters

//  what is array?

// in javascript array is a variable where we can add multiple elements and also add different type of data type like string
// number boolean and more thats why this a litttle different array in comparision to other programming language.

// var myFriend = new Array // this is optional  
// var myFriend = ["imran", "nazish"," faizan", "khan", "kaif"]

// first element of array i scall lower index and last one called upper index

// console.log(myFriend[6]);
// console.log(myFriend[myFriend.length - 1]);

// for loop in array

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// for(var i = 0; i<myFriend.length; i++){
// console.log(myFriend[i])}

// loop in array

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// for(let elements in myFriend){
//     console.log(elements)
// }

// loof of in array

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// for(let elements of myFriend){
//     console.log(elements)
// }

// for each loop - basically for each loop is used for display element index and array without 
// using any previous learned loop and we ca also say its a combination of loop in and loop of.

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// myFriend.forEach(function(element, index, array){
//     console.log(array)
// });

// using fat arrow method

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// myFriend.forEach((element, index, array) => {
//     console.log(`${index} = ${array}`)
// });

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// console.log(myFriend.indexOf("kaif"));

// in above statement 5 is index number and it started searching after 5 index number
// if the element dosnt find it show -1
// camel case matter alot
// it search in a forward way

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif", "nazish"];

// // last index of prototype provide the last element of the array it mean that element
// // somewhere repeated

// console.log(myFriend.lastIndexOf("kaif", 5));



// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]
// console.log(myFriend.includes("nazish", 2));

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]
// console.log(myFriend.)

// what is include?

// var myFriend = ["imran", "nazish","faizan", "khan", "kaif"]

// console.log(myFriend.includes("nazish")) // its show true and include check true or false

// what is find()?



// // suppose the condition is that we want to find the product whose price
// // is less than 400 - price < 400

// const findElem = prices.find((currVal) =>{
//     return currVal < 400;
// })
// console.log(findElem)

// short code 


// const prices = [100, 200, 300, 400, 500, 600];
// console.log(prices.find((currVal) => currVal < 400 ) )

// find index method

// const prices = [100, 200, 300, 400, 500, 600];
// console.log(prices.findIndex((currVal) => currVal < 400 ) )

// what is filter()?

// const prices = [100, 200, 300, 400, 500, 600];
// console.log(prices.filter((currVal) => currVal <= 400 ) )

// var a = 40;
// // var b = 70;
// const sum = (a,b) =>`the sum of a+b is ${a + b}` ;

// console.log(sum(5,6))
 
// what is sort and comparein array? - sort()

// const months = ["jan", "march", "april", "december", "feb"]

// console.log(months.sort());

// sort method in number - sort method work only with string if we
// try sort method in nmumber it will not work

// const numbers = [5, 65, 54, 34, 2, 1 , 78, 985,]

// console.log(numbers.sort())

// const numbers = ["5", "65", "54", "34", "2", "1" , "78", "985",]

// console.log(numbers.sort())

// perform CRUD
// push() method - add elemnt in the last or end

// const animals = ["pigs", "hen", "sheep", "goat"]
// animals.push("chicken", "cow")
// console.log(animals)
// console.log(animals.length)

// unshift() - 

// const animals = ["pigs", "hen", "sheep", "goat"]
// animals.unshift("chicken", "cow")
// console.log(animals)

// in case of number?

// const num = [1,2,3,4,5,6]

// num.unshift(0);
// // console.log(num.unshift(0))
// console.log(num)

// push number are same like string

// const num = [1,2,3,4,5,6]

// num.push(7,8,9);
// // console.log(num.unshift(0))
// console.log(num)


// pop() method - remove data from array using pop method

// const num = [1,2,3,4,5,6]

// // num.pop()
// console.log(num)
// console.log(num.pop())

// shift() method - this method is use for remove first element of array

// const num = [1,2,3,4,5,6]

// num.shift()
// console.log(num)
// console.log(num.shift())

// challenge Time

// splice method

// const myIdea = ["jan", "feb", "march", "april"]

// myIdea.splice(3,0,"dec");
// console.log(myIdea)

// // alternative

// let deleteitem = myIdea.splice(1,1,"dec");
// console.log(deleteitem)

// const myIdea = ["feb", "march", "april"]

// myIdea.splice(1, 1, "FEB")
// console.log(myIdea)

// soln 3

// const myIdea = ["jan", "feb", "march", "april"]

// const position = myIdea.indexOf("jan");

// if(position != -1){
//     const updatemyIdea = myIdea.splice(position,myIdea.length,"APRIL")
//     console.log(myIdea)
//     console.log(myIdea.splice(position,1,))
// }else{
//     console.log("Data is not Found")
// }

// map() method - mapp and for each method are almost same and the main beauty of this map method is 
// it never change the original array so we can use  the original array again

// const num = [1,2,3,4,5,6]

// // nume >3

// let newNum = num.map((curElm,index,arr) => {
//     return `${curElm} ${index} and ${arr}`
// })
// console.log(newNum)
// console.log(num)

// challenge time
// 1. Find the sqaure root of each element in array?

// const arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>{
//     return Math.sqrt(curElem)
// })

// console.log(arrSqr);

// 2. multiply each element by 2 and return only those elements which is greater than 10?
// soln:

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElem) =>{
//     return curElem*2;
// }).filter((curElem) =>{
//  return curElem > 10
// }).reduce((accumulator, curElem, index, arr) => {
//     return accumulator + curElem;
// })


// console.log(arr2)

// chaining effect: we can use chaining effect like use two or method at a time

// reduce() method - for getting single data after using all method we can use reduce method
// so get easily a single value using reduce method

// const redArr = [3, 5, 6, 9, 23, 56]

// let newArr = redArr.reduce((accumulator, curElem, index, arr) => {
//         return accumulator += curElem;
// },8)
// console.log(newArr);

// how to fatten an array?
// converting 2d and 3d array in one dimentional array

// const arr = [
//     ["zone1", "zone2"],
//     ["zone3", "zone4"],
//     ["zone5", "zone6"],
//     ["zone7", "zone8"]
// ]

// its called arrey of an array and 2 dimentional array

// let flatArr = arr.reduce((accum, currVal) => {
//         return accum.concat(currVal);
// })
// console.log(flatArr);

// output is 
// [
//   'zone1', 'zone2',
//   'zone3', 'zone4',
//   'zone5', 'zone6',
//   'zone7', 'zone8'
// ]


// *********************************************************************


// Lets Start Java Scirpt String YOOOOO..............

// this is string constructure and this is never be use but in case 
// of interveiw they can ask.

// let myName = new String("Imran Khan");
// console.log((myName));

// how to find the length of string

// let myName = "Imran Khan";
// console.log(myName.length)

// what is escaoe charracter?
// use backslace before the some special character to make it escapable

// let mySenten = 'my name is khan\'s alright'
// console.log(mySenten)

// How to string in string

// indexOf() method for check - this is same as array indxeof method and in string here 
// it count every letter and space also and if not found that word or letter it show
// -1 like array indexof method

// let mtName = "My name is khan";
// console.log(mtName.indexOf("khan"));

// using index number in forward case

// let mtName = "My name is khan";
// console.log(mtName.indexOf("name", 2));

// lastindexof() method - in this method the value which is returned from forward counting but
// it start counting from backward to forward

// let mtName = "My name is khan";
// console.log(mtName.lastIndexOf("khan", 12));

// search() method - same as inedxof but the only difference is that here we can not use ", 6" position to 
// start counting from there and it is case sensitive also,

// let mtName = "My name is khan";
// console.log(mtName.search("Khan"));

// extracting string parts
// slice, substring, substr

// slice(start, end) - in this method it start counting from 0 and end never be end on end arguments 
// beside it end just before the end number, we can use only start number also,

// var str = "apple, banana, grapes, fruit"
// console.log(str.slice(0,5))

// var str = "apple, banana, grapes, fruit"
// console.log(str.slice(7, -2))

// output - banana, grapes, fru
// when we use - value in end parameter it remove the last digit of that number like 2, 3, 4

// challenge time
// q. display only 280 chararcter of a string like the ine twitter?

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
// let newFor = myTweets.slice(0,280)
// console.log(myTweets.slice(0,280))
// console.log(newFor.length)

// what is substring method?
// substring and slice are same almost but in case of substring it does not accept negative values

// var str = "apple, banana, grapes, fruit"

// console.log(str.substring(10,-9))

// substr() method
// it is also almost similar to slice but the 2nd paramaetr of this call for length

// var str = "apple, banana, grapes, fruit"
// console.log(str.substr(5, Infinity))
// // output: , banana, grapes, fruit
// console.log(str.substr(-5))
// output: fruit

// repalce() method
// how to replace string content() = very simple check below

// var str = "apple, banana, grapes, fruit"
// console.log(str.replace("apple", "kiwi"))

// if same string is available multiple time then what? which one will be replace

// var str = "apple, banana, grapes, fruit, apple"
// console.log(str.replace("apple", "kiwi"))

// replace method is case sensitive and change only first element

// *************************************************************************************

// extracting string character?
// there are three wAY TO EXTRACT character from string

// LET SEE charAt() method - this method is use to extract a single character from string

// let str = "Hello World"
// console.log(str.charAt(6))

// charCodeAt() method - for find unicode value

// let str = "Hello World"
// console.log(str.charCodeAt(0))

// challenge: return the unicode of the last character in a string 

// let str = "HELLO WORLD";
// // let strlength = str.length
// console.log(str.charCodeAt(str.length - 1))

// property access - in ecmascript 2009 mean ES5 allow property access [] on string.. below example

// let jstr = "Hellow World"
// // we can access using [] which is use in array but now we can use here too

// console.log(jstr[0])

// other usefull method like touppercase and to lowercase

// concat() method - concat method basicall join two or more method 

// let fName = "Imran"
// let lName = "Khan"

// console.log(fName + " "+ lName) // common method
// console.log(fName.concat(lName)) // so this is concate method
// console.log(fName.concat(" ", lName))
// console.log(`${fName} ${lName}`)
// we have many option beside concat method

//*********** */

// let see trim () method - for remove all space from both left and right side we use trim method

//converting a string to an array?

// split() method - 

// let arrstr = "a,b,c,d,g"

// console.log(arrstr.split(","))
// console.log(arrstr.split(" "))
// console.log(arrstr.split("|"))

// **************************************************************************************

// Date and time object in js
// we can  find date and time both in one object new Date()

// let curDate = new Date();
// console.log(curDate);

// for local timimg we have to use toLocalString - this  is use for exact your country time

// let curDate = new Date()
// console.log(curDate.toLocaleString());

// toString

// let curDate = new Date()
// console.log(curDate.toString());

//   Date.NOW method

// method for date and time (year, month, date, hours, min, second, milisocond)

// console.log(Date.now());

// var newDate = new Date(2019, 11, 24, 13, 23, 54, 0);
// console.log(newDate.toLocaleString());

// output be like: 24/12/2019, 1:23:54 pm

// atleast we have to add month number otherwise it will show the old date

// let mil = new Date(milisecond)

// **************************************************************************************

// Math object in java script

// the java script math aboject allow you to perform diffrent math condition

// console.log(Math.PI)

// let num = 34.87278
// console.log(Math.round(num))

// let num1 = 34.47278
// console.log(Math.round(num1))

// let x = 3;
// console.log(Math.pow(x, 4))
// console.log((3**4))  // both are same

// console.log(Math.sqrt(2))

// console.log(Math.abs(-55)); // for get absolue value it mean alwaYS show value in possitive number
// console.log(Math.abs(-55.77));
// console.log(Math.abs(-558))
// console.log(Math.abs(4-6))

// math.veil()

// console.log(Math.ceil(4.14))
// console.log(Math.round(4.4))
// console.log(Math.ceil(99.1))
// console.log(Math.round(99.1))

// // floor mathod
// console.log(Math.floor(4.9))
// console.log(Math.floor(4.1))

// // output: 4 4

// // math.min method - to find the lowest value in the arguments
// console.log(Math.min(0, 23, 65, 2, 1, -98, -9876))
// //  math,max method - it  always print maximum value
// console.log(Math.max(0, 23, 65, 2, 1, -98, -9876))

// math.random - 

// console.log(Math.floor(Math.random()*500))

// math.trunc() method - if use this method we will never get decimal value

// console.log(Math.trunc(4.6))
// console.log(Math.trunc(9.6))
// // console.log(Math.trunc(-4.6))

// let myName = {val:"imran khan",
// getdata: function name(){
//     console.log(this.val)
// }
// }
// console.log(this.getdata);

// Array Destructuring

// const myBioData = ["vinod", "thapa", 45]

// let myName = myBioData[0]

// console.log(myName)

// let [myName,myLname,Age] = myBioData;

// console.log(myLname);
// console.log(myName);
// console.log(Age);

// we have to make position in destructuring in the position of index number

// const myBioData = ["vinod", "thapa", 45]

// // So we can add also element using array destructuring method
// let [myName,myLname,Age,Degree="Bsc"] = myBioData;

// console.log(myLname);
// console.log(myName);
// console.log(Age);
// console.log(Degree);

// object destructuring - same as array method let see below example

// old method without  destructuring
// const BioData = {
//     Fname : "Imran",
//     Lname : "Khan",
//     Age : 54
// }

// let age = BioData.Age;
// console.log(age);

// now we see destructuring method 

// let {Fname,Lname,Age, MyDegree="msc"} = BioData;

// console.log(Fname);
// console.log(Lname);
// console.log(Age);

// Object Properties

// add square bracket inside the curly bracket in the key so that will take the value of
// that variable from like assignment

// let myName = "khan"
// const Bio = {
//     [myName]:"khankhan",
//    [ 26 + 9]: "khannn"
// }
// console.log(Bio)

// output: { '35': 'khannn', khan: 'khankhan' } - this is the new rule which add after es6 2015

// 2nd rule - no need to write key and value if both are same 

// let myName = "khan"
// let myLast = "Imran"

// const myObj = {
//     myName,myLast
// }
// console.log(myObj);

// Spread Operator ... this is - so we can add array inside the another array using ... spraed operato

// let color = ["red", "black", "Yellow", "Orange"]

// let myFavColor = [...color, "Green", "Pink"] 

// console.log(myFavColor)

// ********************************************************************************************

// ECMAScript 2016/ES7 Features

// 1. array inclue - so using this new features we can check any elemets available on that array or not

// let newArray = ["khan", "yoo", "imran", "Khannn"]

// console.log(newArray.includes("yoo7o"))

// 2. ** exponentiation using ** 

// console.log(2**4);
// console.log(Math.pow(2,4))

// both the above are same but the first one was added after 2016 ecma script es7


// ECMAScript 2017/ES8 Features

// 1. string padding - padding is same is css like we can add space using padstart and padend

// const msg = "this is mesg"

// console.log(msg)
// console.log(msg.padStart(5))
// console.log(msg.padEnd(10))

// 2. how to add only object value using new method

// const newC = { name:"khan", age:18 }
// console.log(Object.values(newC))

// output = [ 'khan', 18 ]

//3. object entries

// const newC = { name:"khan", age:18 }
// console.log(Object.entries(newC))

// output be like = [ [ 'name', 'khan' ], [ 'age', 18 ] ]

// let oldNum = Number.MAX_SAFE_INTEGER;

// console.log(oldNum);
// console.log(9007199254740991n + 12n)
// let bigInt = 9007199254740991n + 12n
// console.log(bigInt)
// console.log(typeof(bigInt));


// array method

// let myArr = ["imran", 67, true, false, null, undefined]

//array methods
// console.log(myArr.length)
// myArr.pop(); for remove last element
// myArr.push("khan") for add elemnet in last
// myArr.shift() for add element in first
// console.log(myArr.toString());

// console.log(myArr)
// let arra = myArr.push("khan");
// console.log(arra);

// let d = [1, 23, 54, 67, 87, 34, 23,]
// console.log(d.sort());

// string methods in java script

// let mystr = "i love you yono"
// how to check string length
// console.log(mystr.length);
// //for find any exact word which is first
// console.log(mystr.indexOf("y"));
// //for find any exact word which is last
// console.log(mystr.lastIndexOf("y"))

// for print from -- to --
// console.log(mystr.slice(0,5));
// // replace word
// d = mystr.replace("love", "hug")
// console.log(d);

// for date

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime())
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getHours())


// what is variables? variable is a container that different data value.
// we donate container as var
/* 
multi
line
comment 
*/

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// // what is data type?

// //example of number data type
// var num1 = 45;
// var num3 = 62;

// // example of string data type which is laways is single and dounble quote

// var str1 = "this ia imran kkhan"
// var str2 = 'what is thsi'

// // object data type

// var values = {
//     imran: 45,
//     khan: 65,
//     rashid: 67
// }
// console.log(values);
// console.log(imran)
// console.log(str2);

// // boolean data type

// var a =  true;
// var b = false;
// console.log(a,b, num1)

// // undefined data type

// var und = undefined
// var imran;
// console.log(und)
// console.log(imran);

// // null data type

// var a1 = null;
// console.log(
// a1
// )

// /* Basically there are two type of data type 
// 1. premitive data type eg. undefined, null, number, object, string, symbol
// 2. refernce data type eg. object and arrays */

// var x = [0,1,2,3,4,5]
// var name1 = ["imran", 'khan' , "faizan"]
// console.log(name1[0]);
// console.log(x)
// console.log(x[3]);
// console.log(name1[1]);
// console.log(name1)

// // what is operator in js
// // arthematic operator +-*/

// var s = 23;
// var t = 34;

// console.log(s+t);
// console.log(s-t);
// console.log(s*t);
// console.log(s/t);

// // assignment operator
// // in aasignment operator we basically assign the previous value and also
// // we can add +-*/ with that - below example given:

// var c = s;
// // c += 2;
// // c -= 2;
// // c *= 2;
// c /= 2;
// var d = t
// d += 4;
// console.log(c);
// console.log(d);

// // comparision operator

// var i = 45;
// var j = 43;
// // console.log(i == j);
// // console.log(i > j)
// // console.log(i < j)
// // console.log(i >= j)

// // logical operators

// console.log(true && true)
// console.log(true || false)
// console.log(!false);
// console.log(!true)

// Function in java script

// function avg(a, b) {
//     return (a + b) / 2;
// }
// imran = avg(50, 50);
// console.log(imran);

// function value(f) {
//     return (f - 32) * 5 / 9;

// }
// fehr = value(12);
// console.log(fehr);

// function a(r) {
//     return (r * r);
// }
// square = a(9);
// console.log(square);

// // if we make a lot function that will useless until we use in anywhere.
// // so we can make different type of function like addition, find cgpa, percentage and more

// console.log(5)
// console.log("the")
// let consttt = "khan"

// // conditional in java script

// var age = 655;
// age = 24;
// age = 57;
// if (age < 18) {
//     console.log("you are not eligible")
// }
// else if (age > 32) {
//     console.log("you are eligible")
// }
// else if (age < 25) {
//     console.log("you are genius")
// }
// else if (age < 60) {
//     console.log("yoo yoo")
// }
// else {
//     console.log("hghqwejbn")
// }

// //  loop in java script

// for loop
// var arrays = [1, 2, 3, 4];
//  for (var i = 0; i < arrays.length; i++) {
//      if (i == 2){
//          break;
//      }
//     console.log(arrays[i])
//  }

// while loop

//  let j = 0;
// while (j<arrays.length){
//    console.log(arrays[j]);
//   j++
// }


// constant - if we use const then we cant change that value it will show errror

// const y=7;
// y += 1;
// console.log(y);

// let btn = document.getElementById('button');
// console.log(btn)
// btn..style.background = "red";

// btnclass = document.getElementsByClassName("conatainer")
// console.log(btnclass)
// btnclass[0].style.background = "green";
//  let x = 
//  console.log(document.getElementById("button")).style.background = "yellow";

// let tn = document.getElementsByTagName("div")
// console.log(tn)
// createdElement = document.createdElement('p');
// createdElement.innerText = "i am new here"
// tn[0].appendChild(createdElement);

// Events in js

// set timeout and interval

// sum = (a,b)=>{
//     return a+b;
// }
// logKaro = ()=>{
//     document.getElementById("button").innerHTML = " dont click me"
//     console.log("i am genius")
// }
// //  setTimeout(logKaro, 2000)

// clr = setInterval(logKaro, 2000);
// clearInterval(clr)

/* java script local storage */

// json



// setInterval(() => {
//     let a;
//     let date;
//     let time;
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     a = new Date();
//     date = a.toLocaleDateString(undefined, options);
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.getElementById("time").innerHTML = time + "<br> On " + date;
// }, 1000);















