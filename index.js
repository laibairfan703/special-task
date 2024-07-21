//--------------------------------------------------------------------------task1practice-----------------------------------------------------------------
let number = [1,2,3,4,5,6,7];
console.log(number)

function reverse() {
 console.log(number.reverse())
}
reverse()
// ----------------------------------------------------------------------------task1----------------------------------------------------------------------
let friendsname = ["iqra","tuba","ali","sara","misbah","alishba","rabia","maaz","hoorain","nazish"];
console.log(friendsname)

function revers() {
 console.log(friendsname.reverse())
}
revers()

//-----------------------------------------------------------------------------task2----------------------------------------------------------------------

//-----------------------------------------------------------------------------task3----------------------------------------------------------------------
Count = 0

function vowels() {
let input = prompt("enter a string");
let vowels =["a","e","i","o","u"];
for (let i=0; i < input.length; i++)
    if (input[i] =="a" ||input[i] =="e" || input[i] =="i" || input[i] =="o" || input[i] =="u") 
    Count +=1
 console.log(Count);
}
vowels()
// ---------------------------------------------------------------------------task5-----------------------------------------------------------------------
function Int() {
 let num1 = prompt("enter the first number");
 let num2 = prompt("enter the second number");
 if (num1 >50 && num2 <90 )
console.log(true);
}
Int()
// ---------------------------------------------------------------------------task9-----------------------------------------------------------------------
function round() {
    let value = +prompt("enter a number that you want to round off");
    newvalue = Math.ceil(value)
    console.log(newvalue)
}
round()
// --------------------------------------------------------------------------task8------------------------------------------------------------------------
function Angle() {
    let Angle = +prompt("enter the degree of an angle i will tell you the type");
    if (Angle >=0 && Angle < 90 ) {
        console.log("Acute angle")
    }
    else if (Angle === 90){
        console.log("Right angle")
    }
    else if (Angle >90 && Angle < 180){
        console.log("Obtuse angle")
    }
    else if (Angle === 180){
        console.log("Straight  angle")
    }
}
Angle()
// -------------------------------------------------------------------------task7-------------------------------------------------------------------------
function getLastCharacter(str,n) {
    let newString = str.substring(str.length - n);
    return newString;

}
let str = "hello world ";
let n=5;
console.log(getLastCharacter(str,n)); 
// ------------------------------------------------------------------------task10------------------------------------------------------------------------
const fruits = ['apple', 'banana', 'cherry', 'orange'];
const index = fruits.indexOf('cherry');
console.log(index); // Output: 2

// ------------------------------------------------------------------------task6-------------------------------------------------------------------------
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min);//
