//----------------from Hard to Easy-----------
// -----------------------------------------begin 6kyu problems-----------------------------------------:
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).*/
function twoSum(numbers, target) {
    let i=0;
    while(i<numbers.length){
        let j=i+1;
        while(j<numbers.length){
            if(numbers[i]+numbers[j]=== target){
                return [i, j]
            }
            j++
        }
        i++
    }
}
/*You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of 
the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.*/
function findEvenIndex(arr){
    let i = 0;
    while(i<arr.length){
        let leftSide = 0;
        let rightSide = 0;
        for(let j = 0; j<i; j++){
            leftSide+= arr[j];
        }
        for(let j = i+1; j<arr.length; j++){
            rightSide+= arr[j];
        }
        if(leftSide===rightSide){
            return i
        }else i++
    }
    return -1
}
/*In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. */
function wave(str){
    let newArr = [];
    for(let i in str){
        if(str[i]!= " "){
            let strArr = str.split("");
            strArr.splice(i, 1, str[i].toUpperCase()).join("")
            newArr.push(strArr.join(""))
        }else{continue}
        console.log(str[i])
    }
    return newArr
}
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).
*/
function high(x){
    let weightArr = x.split(" ").map((e)=>{
        let weight = 0
        for(let i in e){
            weight += e.charCodeAt(i)-96
        }
        return weight
    })
    let index = weightArr.indexOf(Math.max(...weightArr))
    return x.split(" ")[index]
}
/*
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/
function sumDigPow(a, b) {
    let arr = [];
    for(let i = a; i<=b; i++){
        let sum = 0;
        for(let j in i.toString()){
            sum+= Math.pow(+i.toString()[j],+j+1)
        }
        if (sum === i){
            arr.push(i)
        }
    }
    return arr;
}
/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.*/
function persistence(num) {
    if(num<10){
        return 0
    }else {
        i = 0;
        while(num>=10){
            num2 = 1;
            for (let i in num.toString()){
                num2 *= +num.toString()[i];
            }
            i++
            num = num2
        }
    }
    return i;
}
/*
 */
function findUniq(arr) {
    i = 0;
    while(arr){
        if(arr[i]!=arr[i+1] && arr.indexOf(arr[i+1])===arr.lastIndexOf(arr[i+1])){
            return arr[i+1]
        }else if(arr[i]!=arr[i+1] && arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            return arr[i]
        }else {
            i++;
    }
}
//Seconds methods workds for short arrays
//   return arr.indexOf(Math.min(...arr))===arr.lastIndexOf(Math.min(...arr)) ? Math.min(...arr) : Math.max(...arr)
}
/*Complete the solution so that the function will break up camel casing, using a space between words.*/
function solution(string) {
    let upper = string.split("").filter((e)=>e.toUpperCase()===e).join("")
    if(string.length>0){
        return string.split("").map((e, i)=>upper.includes(e) ? e = " " + e : e).join("");
    }else{
        return string;
    }
}
/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).*/
function isPangram(string){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i in alphabet){
        if(string.toUpperCase().includes(alphabet[i])){
        alphabet[i]="";
        }
    }
    return (new Set(alphabet).size ===1 )
}
/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.*/
function countSmileys(arr) {
    return arr.filter((element)=>/(^:(-|~)?D$|^;(-|~)?D$|^;(-|~)?\)$|^:(-|~)?\)$)/g.test(element)).length;
}
/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.*/
function sortArray(array) {
    let oddArr = array.filter((element)=>element%2!=0).sort((a, b)=> a - b);
    let j =0;
    for (let i in array){
        if(array[i]%2!=0){
            array[i] = oddArr[j];
            j++;
        }
    }
    return array
}
/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.*/
function order(words){
    let final = "";
    while(words.length>0){
        for (let i = 0 ; i<words.split(' ').length; i++){
            let re = new RegExp(`\\w*${i+1}\\w*`,"ig")
            if(i === 0){
                final = final + words.match(re);
            }else {
                final+=" " + words.match(re);
            }
        }
        return final;
    }
return final;
}
/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
function findOdd(A) {
    let mySet = new Set(A).values();
    let myValue = mySet.next();
    while(myValue.done===false){
        let count = 0;
        for (let i in A){
            if (A[i]=== myValue.value){
                count++;
            }
        }
        if(count%2 !== 0){
            return myValue.value
        }else {
            myValue = mySet.next();
        }
    }
}
/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/
function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return text.split("").map((element)=>alphabet.indexOf(element.toLowerCase())+1)
                .filter((element)=>element !== 0).join(" ");
}
/*Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n./*/
function digPow(n, p){
    let array = n.toString().split("");
    let sum = 0;
    for (let i in array){
        sum += Math.pow(parseInt(array[i]),p);
        p++;
    }
    return sum%n === 0 ? sum / n : -1;
}
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.*/
function arrayDiff(a, b){
    let c = [];
    for (let i in a){
        if(!b.includes(a[i])){
            c.push(a[i]);
        }
    }
    return c;
}
/*Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should 
replace the missing second character of the final pair with an underscore ('_').*/
function solution(str){
    let arr = [];
    if (str.length%2!=0){
    str = str.concat('_');
    for(i=0; i<str.length ; i+=2) arr.push(str.slice(i,i+2));
    return arr;
    }else{
        for(i=0; i<str.length ; i+=2) arr.push(str.slice(i,i+2));
        return arr;
    }
}
/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.*/
function findOutlier(integers){
    let odd = 0;
    let even = 0;
    for(let i=0;i<integers.length;i++){
        integers[i]%2 === 0 ? even++ : odd++;
    }
    if(even>odd){
        return parseInt(oddNumber=integers.filter(function(element){
            return element%2 !== 0
        }));
    }else {
        return parseInt(evenNumber=integers.filter(function(element){
            return element%2 === 0
        }));
    }
}
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
any elements with the same value next to each other and preserving the original order of elements.*/
var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let order = [];
    let newLength = 0;
    var i = 0;
    while(i<iterable.length){
        if (iterable[i]===iterable[i+1]){
            i++;
        }else {
            newLength=order.push(iterable[i])
            i++;
        }
    }
    return order
}
// -----------------------------------------end 6kyu problems-----------------------------------------.
// -----------------------------------------begin 7kyu problems-----------------------------------------:
/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.*/
function addBinary(a,b) {
    return (a+b).toString(2);
}
/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.*/
function nbDig(n, d) {
    let nb = 0;
    for(let i =0; i<=n; i++){
    let x = Math.pow(i, 2).toString()
        for(let j in x){
            if(+x[j] == d){
                nb++
            }
        }
    }
    return nb
}
/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/
function longest(s1, s2) {
    return Array.from(new Set((s1+s2).split("").sort()).values()).join("")
}
/*Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.*/
function findNextSquare(sq) {
    let i=sq;
    while(Math.sqrt(sq) == Math.trunc(Math.sqrt(sq))){
        i++;
        let sqrt = Math.sqrt(i);
        if(sqrt == Math.trunc(sqrt)){
            return i
        }
    }
    return -1;
}
/*Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).*/
function oddOrEven(array) {
    if(array.length>0){
        if(array.reduce((acc, curr)=>acc+curr)%2===0) return "even";
        else return "odd";
    }
    return "even";
}
/*Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.*/
function getDivisorsCnt(n){
    let divisors = 0;
    for(let i=1; i<=n; i++){
        if(n%i===0){
            divisors++
    }
    }
    return divisors
}
/*Your task is to write a function which returns the sum of following series upto nth term(parameter)./*/
function SeriesSum(n){
    let sum = 0;
    if(n>0){
        let q = 1;
        for (let i = 1; i<=n; i++){
            sum+= 1/q;
            q+=3;
        }
    }
    return sum.toFixed(2)
}
/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/
function sumTwoSmallestNumbers(numbers) {  
    let min = Math.min(...numbers);
    let min2 = Math.min(...numbers.filter((e)=>e!=min))
    return min+min2;
}
/*Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.*/
String.prototype.toJadenCase = function () {
    return this.split(" ").map((e)=>e.replace(e[0],e[0].toUpperCase())).join(" ");
};
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.*/
function getSum(a, b){
    let sum = 0;
  if(a===b){
    return a
  }else if (a>b){
    for(let i=b; i<=a;i++){
      sum+=i;
    }
  }else{
      for(let i=a; i<=b;i++){
      sum+=i;
    }
  }
  return sum
}
/*Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/
function disemvowel(str) {
    return str.split("").filter((e)=>!"aeuio".includes(e.toLowerCase())).join("")
  }
/*You have to write a function printer_error which given a string will return the 
error rate of the printer as a string representing a rational whose numerator is the number of errors 
and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.*/
function printerError(s) {
    return `${s.split("").filter((e)=>!"abcdefghijklm".includes(e)).length}/${s.length}`
  }
/*Write a function that returns both the minimum and maximum number of the given list/array.*/
function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
  }
/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/
const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that 
determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.*/
function isIsogram(str){
    let l = str.toLowerCase().split("").filter((element, index)=> str.toLowerCase().split("").indexOf(element) === index).length;
    return (l === str.length);
}
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.*/
function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(""));
}
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
    let x = str.split("").filter((element)=>element.toLowerCase() === "x").length;
    let o = str.split("").filter((element)=>element.toLowerCase() === "o").length;
    return x === o ? true : false;
}
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers){
    let high = parseInt(numbers.split(" ")[0]);
        let low = parseInt(numbers.split(" ")[0]);
        numbers.split(" ").forEach(element => {
            if (parseInt(element)>high){
                high = element;
            }else if(parseInt(element)<low) {
                low = element;
            }
        });
        return high+" "+ low
    }
/*Given an integral number, determine if it's a square number:*/
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}
/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/
//----------------first method----------------------
// function reverseWords(str) {
//     let array = str.split(" ");
//     //console.log(array);
//     for (let i in array){
//         array[i] = array[i].split("").reverse().join("");
//     }
//     return array.join(" ");
// }
//----------------second method----------------------
function reverseWords(str) {
    return str.split(" ").map(element => {
        return element.split("").reverse().join("");
    }).join(" ");
}
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.*/
function filter_list(l) {
    return l.filter((e)=>typeof e === "number");
}
/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, 
return the middle character. If the word's length is even, return the middle 2 characters.*/
function getMiddle(s){
    let l = s.length;
    return l%2===0 ?  s[l/2-1]+s[l/2] : s[Math.floor(l/2)];
}
/*This time no story, no theory. The examples below show you how to write function accum:*/
function accum(s){
    let s1 = s.split("");
    let array = [];
    for (let i = 0; i<s1.length; i++){
        let upper = s1[i].toUpperCase();
        let str = upper.concat(s1[i].toLowerCase().repeat(i));
        //console.log(str);
        array.push(str);
    }
    return array.join("-");
}
/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
    let n = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let array = str.split('');
    for (let i in array){
        if(vowels.includes(array[i])){
            n+=1;
        }
    }
    return n ;
}
/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/
function findShort(s){
    let array = s.split(" ");
    let shortest = array[0].length;
    for(i=1; i<array.length; i++){
        if (shortest >= array[i].length) {
            shortest = array[i].length;
        }
    }
    return shortest;
}
/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.*/
function validatePIN (pin) {
    //begins or ends with exactly 4 or 6
    return  (/(^\d{4}$|^\d{6}$)/g.test(pin));
}
/*Make a program that filters a list of strings and returns a list with only your friends name in it.*/
function friend(friends){
    return friends.filter(f => f.length === 4);
}
// -----------------------------------------end 7kyu problems-----------------------------------------.