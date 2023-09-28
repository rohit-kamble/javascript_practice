// ***** addition using recursive *****

// let d = [1,2,3,4,5,6];
// const addtionOFArray=(arr, n)=> n == 0 ? arr[0] : arr[n] += addtionOFArray(arr, n - 1);
// console.log('Total recursive', addtionOFArray(d, d.length - 1));

// ***** itrative addtion *****

// const d = [2,5,6,8,4];
// let total = 0;
// function additionItrative () {
    // by using reduce method
    // return d.reduce((acc, val)=> acc + val);
    
    // by using simple itrative method
//     for(let i=0; i< d.length; i++) {
//         total += d[i];
//     }
//     return total;
// }
// console.log('totla', additionItrative());

// ***** roots using recusrsive *****

// const rootRecursive = (value, root) => root === 1 ? value : rootRecursive(value, root - 1) * value;
// console.log('Root recursive', rootRecursive(4, 3))

// ***** roots using itrative method *****
// let roots = 1;
// function rootItrative(value , root) {
//     for(let i=0; i< root ; i++) {
//         roots *= value;
//     }
//     return roots;
// }
// console.log("roots---", rootItrative(2, 3));

// ***** maximum no in array *****

// const array= [2,3,9,8,19,0,40,5];
// const findMaxNoRecursive = (arr, n) => n === 0 ? 
// arr[n] : findMaxNoRecursive(arr, n - 1) > arr[n] ? 
//     findMaxNoRecursive(arr, n - 1) : 
//     arr[n]
// console.log("find Max", findMaxNoRecursive(array, array.length - 1))

// ***** maximum no in array using ittrative *****

// const arr = [2,3,9,8,19,1,40,5];
// let max = 0;
// function maximumItrative(){

    // by using reduce method
    // return arr.reduce((acc, val)=> acc > val ? acc : val);

    // by using itrative method
    // for(let i=0; i<arr.length; i++){
    //     max = max > arr[i] ? max : arr[i];
    // }
    // return max;
// }
// console.log('maximum---', maximumItrative());

// ***** minmum no in array *****

// const array= [3,9,8,19,40,5,1];
// const findMinNoRecursive = (arr, n) => n === 0 ? 
// arr[n] : findMinNoRecursive(arr, n - 1) < arr[n] ? 
//     findMinNoRecursive(arr, n - 1) : 
//     arr[n]
// console.log("find Min", findMinNoRecursive(array, array.length - 1))

// ***** minmum no in array using ittrative *****

// const arr = [2,3,9,8,19,1,40,5];
// let max = 0;
// function maximumItrative(){

    // by using reduce method
    // return arr.reduce((acc, val)=> acc < val ? acc : val);

    // by using itrative method
    // for(let i=0; i<arr.length; i++){
    //     max = max < arr[i] ? max : arr[i];
    // }
    // return max;
// }
// console.log('maximum---', maximumItrative());

// ***** ultiplication no in array *****

// const arr = [2,4,5,6,8];
// const findMultiRecursive = (arr, lenght) => {
//   if(lenght == 0) {
//     return arr[lenght]
//   }
//   else {
//     return findMultiRecursive(arr, lenght - 1) *  arr[lenght];
//   }
// } 
// console.log('Total multiplication', findMultiRecursive(arr, arr.length - 1))

// ***** multiplication by using itrative method *****

// const arr = [3,4,3];
// let ans= 1;
// function multiplicationItrative () {
    // multiplication no by using itrative
    // for(let item of arr) {
    //     ans = ans * item;
    // }
    // return ans;

    // multiplication no by using reduce
    // return arr.reduce((acc, val) => acc * val);
// }
// console.log('Answer', multiplicationItrative())

// ***** fibnaci series ***** 

// const len = 7;
// const fibbonaciSeris = (num) => {
//     if( num === 1 || num === 2) {
//         return 1;
//   }
//   else {    
//     return fibbonaciSeris(num - 1) + fibbonaciSeris(num - 2);
//   }
// }
// let ans = "";
// for(let x= 1; x <= len; x++) {
//     ans += fibbonaciSeris(x) + ",";
// }
// console.log('ans', ans);
// console.log('data--', data);

// **** itrative fibonaci series *****

// let data = [];
// let len = 7;
// function itrativeFun () {
//     for(let i = 0; i < len; i ++ ) {
//         if( i == 0 || i == 1) {
//             data.push(1);
//         }
//         else {
//             console.log("i-1 =", data[i - 1], "i-2 = ", data[i - 2]);
//             data.push(data[i - 1] + data[i - 2])
//         }
//     }
//     return data;
// }

// console.log('iterative', itrativeFun());

//  ***** Given a string, reverse each word in the sentence *****

// const str = "welcome to React";
// const d = str.split(" ");
// function reverseString(strArr) {
    // let news = "";
    // for(let i=0; i<=strArr.length - 1; i++){
        
        // using another method
        // for(let j=strArr[i].length - 1; j>=0;j--){
        //     news += strArr[i][j];
        // }
        // news += ' ';

        // const t = strArr[i].split("")

        // by using for loop.
        // for(let j=t.length - 1; j>= 0; j--) {
        //     news += t[j]; 
        // }
        
        // by using reverse method().
        // news += t.reverse().join("", ",") + " ";
    // }
    // return news
// }
// console.log('Reverse String==', reverseString(d))

// var arrayList = [1 , 2, 3];
// console.log("isArray", Array.isArray(arrayList));
// console.log("---", Object.prototype.toString.call(arrayList));


//  ***** Implement enqueue and dequeue using only two stacks in JavaScript *****

// const stack1 = [];
// const stack2 = [];

// Method that will perform our enqueue operation
// function enqueue(element) {
//     stack1.push(element);
//     console.log("Stack-1 elements are enqueue: ", stack1);
// }

// Method that will perform our dequeue operation
// function dequeue() {
//     if (stack2.length > 0 || stack2.length === 0) {
//         if (stack1.length === 0) {
//             console.log("Dequeue not possible because queue is empty..");
//         }
//         if(stack1.length > 0) {
//          let x = stack1.pop();
//             console.log("xxx", x);
//             stack2.push(x);
//         }
//     }
// }

// enqueue("a");
// enqueue("b");
// enqueue("c");
// enqueue("d");
// dequeue();
// dequeue();
// dequeue();
// console.log("stack1--", stack1, 'stack2--', stack2.reverse());

// **** 
// Create a for loop that iterates up to 100 while outputting 
// "fizz" at multiples of 3, "buzz" at multiples of 5 and 
// "fizzbuzz" at multiples of 3 and 5.
// ****

// function fizzFunc(n) {
//     for(let i=1; i<=n; i++) {
//         if(i % 5 === 0) {
//             console.log('**buzz**', i)
//         }
//         if(i % 3 === 0) {
//             console.log('fizz=', i)
//         }
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('====fizzbuzz====', i)
//         }
//     }
// }

// console.log('ans', fizzFunc(100))

// ***** duplicate array duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// function duplicateArray(arr) {
//     return arr.concat(arr);
// }

// console.log("ans", duplicateArray([1,2,3,]));

// ***** Palindrome Using for Loop *****
// let reverseStr = "";
// function palindromeString(str) {
//     // return str.split("").reverse().join("") === str;
    
//     // for(let i =str.length - 1; i>=0;i--){
//     //     reverseStr += str.charAt(i);
//     // }

//     // return reverseStr === str;
// }

// console.log("palindrome string--", palindromeString('madam'))

// ***** Palindrome Using for Loop *****
// const palindromeStr = "mom";

// function palindromeReverseRecursion(str, n, newStr) {
//     newStr += str.charAt(n);
//     if(n == 0) {
//         return newStr === str;
//     }
//     else {
//         return palindromeReverseRecursion(str, n - 1, newStr);
//     }
// }

// console.log('****', palindromeReverseRecursion(palindromeStr, palindromeStr.length - 1, newStr=""))

// ***** [1,[2,[3,[4,[5,[6]]]]]] => [1,2,3,4,5,6]

// const arr = [1,[2,[3,[4,[5,[6]]]]]];
// let data =[];
// function flatArray(arr) {
//     for(let set of arr) {
//         if(typeof set !== 'object') {
//             data.push(set);
//         }
//         else {
//             flatArray(set)
//             return data;
//         }
//     }
// }

// console.log("****", flatArray(arr));

// ***** factorial number ****

// function factorialNum(n){
//     if(n === 0) {
//         return 1;
//     }
//     else {
//         return factorialNum(n-1) * n;
//     }
// }

// console.log("factorial", factorialNum(6))

// ***** factorial number using itraive  ****
// let ans=1;
// function itrativeFun(n) {
//     for(let i =1; i<= n; i++) {
//         ans *= i
//     }
//     return ans;
// }

// console.log(itrativeFun(5));

// **** object litterial *****

// const data = {
//     "name": "rohit",
//     getName: function (){
//         return "name " + this.name;
//     }
// }
// data.age = 29;
// console.log('data', data.getName());

// ***** constuctor function *****

// function data(name, age) {
//     this.nam = age;
//     this.ge= name;
// }

// const b = new data("29", "age")
// delete b.ge;
// console.log(b);

// ***** using ES6 class *****

// class objectCreate{
//     constructor(name, age, mobile) {
//         this.n = name;
//         this.a = age;
//         this.m = mobile 
//     }
// }
// debugger;
// const data = new objectCreate("Rohit", 29, 8983868905);
// console.log(data);


// using Object.create method 

// const g =  {"name" :"rohit", person: function() { return "name " + this.name}}
// const data = Object.create(g);
// data.age = 28;
// data.name = "store"
// console.log(data.person())

//***** Callback example ******/

// const add = (ans)=> {
//     return "ans "+ ans;
// }

// const calculate = (a, b, callBack) => {
//     const add = a+b;
//    return callBack(add);
// }

// const d = calculate(2,9,add);
// console.log(d);


// lexical scope

// const d = {
//     name: "rohit",
//     ag: 29,
//     getInfo: function() {
//         console.log("this", this.name);
//         // const that = this;
//         const show = ( ) => {
//             console.log("show", this.name)
//         }
//         show();
//     }
// }
// d.getInfo();

// function sum (a) {
//     return function (b) {
//         console.log(a,b)
//     }
// }
// const d= sum(4)
// console.log("sum=", d);

// const d= ["1","2", "3", "4", "2"];
// const m = d.filter((item, ind)=> d.indexOf(item) === ind)
// console.log(m)

// const h = [{"name": "rohit"}, {"name": "raj"}, {"name": "rohit"}]
// function removeDuplicateArray (h) {
//     let obj= {}
//     let neArr =[];
//     for(let x of h) {
//        obj[x.name] = x.name 
//     }
//     for(let jo of Object.keys(obj)) {
//         neArr.push({"name": jo})
//     }
//     return neArr;
// }

// console.log(removeDuplicateArray(h));

// ***** exmaple of Apply, Call and Bind *****
// const obj = {
//     "name": "rohit",
//     getFun: function(next, data) {
//         return "---" + this.name + "---" + next + data
//     }
// }
// console.log("call", obj.getFun.call(obj, "kamble", "datat"))
// console.log("apply", obj.getFun.apply(obj, ["kamble", "datat"]))
// const b = obj.getFun.bind(obj);
// console.log("bind", b("kamble", "test"))


// ***** convert minute to Second

// function minuteToSecond(minute){
//     return minute * 60
// }

// function hourToSecoond(hour){
//     return hour * 60 * 60;
// }
// console.log("ans=", hourToSecoond(2));


// **** convert Age to Days

// function ageToDays(age) {
//     let val = 0;
//     let currentYear = new Date().getFullYear();
//     const birthYear = currentYear - age;
//     for(let i = birthYear; i<currentYear; i++) {
//         if(i % 4 === 0 || (i % 400 === 0 && i % 100 === 0)) {
//             val += 366;
            
//         }
//         else {
//             val += 365;
//         }
        
//     }
//     return val;
// }
// console.log("ageToDays", ageToDays(30))

// ***** Is the Number Less than or Equal to Zero *****

// function checkNumberLessThanZero(num) {
//     return num <= 0;
// }

// console.log("==", checkNumberLessThanZero(-2))

// **** sum of ploygone ****

// function sumOfPolygone(n) {
//     return (n - 2) * 180;
// }
// console.log("ans=", sumOfPolygone(6));

// ***** Football Points ****
// ***** wins get 3 points ** 
// ***** draws get 1 point ** 
// ***** losses get 0 points
 
// function footballPoint(win, draws, losses){
//     let result=0;
//     result += win * 3;
//     result += draws;
//     result += losses * 0
//     return result;
// }

// console.log("result==", footballPoint(3, 4, 2));

// **** Profitable Gamble *****
// function profitableGamble(prob, prize, pay){
//     return (prob * prize) > pay; 
// }

// console.log("ans", profitableGamble(0.9, 3, 2))

// ***** Compare Strings by Count of Characters *****

// function compString(str1, str2){
//     return str1.length === str2.length;
// }

// console.log("result1==", compString("ad", "cd"));
// console.log("result2==", compString("adc", "de"));
// console.log("result3==", compString("hello", "edabit"));

//***** recursion lenth of string

// function recusrsionLenStr(str, len) {
//     len = len || 0;
//     if(str.length === 0){
//         return len;
//     }
//     else {
//         return recusrsionLenStr(str.substring(1), len + 1);
//     }
// }

// console.log("**", recusrsionLenStr("rohi"));

// ***** divide evenly *****

// function divideEvenly(a, b){
//     console.log("--", (a % b));
//     return (a % b === 0); 
// }

// console.log("result =", divideEvenly(98, 7));

// **** Array Manipulation ****
// const data = [];
// function arrayManipulation(arr, len) {
//     len = len || arr.length;
//    if(arr.length === 0){
//     return data.reverse();
//    }else {
//     data.push(arr[len - 1] + 1)
//     arr.pop()
//     return arrayManipulation(arr, arr.length);
//    }
// }

// console.log("--1", arrayManipulation([0,1,2,3]))
// console.log("--2", arrayManipulation([2,4,6,8]))
// console.log("--3", arrayManipulation([-1,-2,-3,-4]))

// ***** concat two array *****

// function concatTwoArray(ar1, ar2){
//     return ar1.concat(ar2);
// }

// console.log("merge array=", concatTwoArray([1,2,3], [4,5,6]))

// ***** how many car are nedded to seat everyone comfortably(one car only 5 passanger allowed)

// function carsNedded(n, i){
//     i = i || 0;
//     if(n <= 0) {
//         return i;
//     }
//     else {
//         return carsNedded(n - 5, ++i);
//     }
// }

// console.log("result=", carsNedded(0));

// itreative way 

// function carNeddedItrative(n){
//     let count = 0;
//     for(let i =0; i< n ; i++) {
//         if(i % 5 === 0) {
//             ++count;
//         }
//     }
//     return count;
// }

// console.log("result=", carNeddedItrative(0))
// console.log("result=", carNeddedItrative(5))
// console.log("result=", carNeddedItrative(11))

// ***** Print all number in array which is comes in range of given number*****

// function arrBetwwen(num1, num2, arr) {
//     const data = [];
//     for(let x of arr) {
//         if (num1 < x && x < num2){
//             data.push(x);
//         }
//     }
//     return data;
// }

// console.log("ans=", arrBetwwen(1,10, [1,10,25,8,11,6])) // [8, 6]
// console.log("ans=", arrBetwwen(3,8, [1,5,95,0,4,7])) // [5, 4, 7]

// ***** valid number *****

function validNumber(n) {
    return !isNaN(n);
}
console.log("valid Number=", validNumber("374"))
console.log("valid Number=", validNumber("37.8"))
console.log("valid Number=", validNumber("37..4"))
console.log("valid Number=", validNumber("number"))