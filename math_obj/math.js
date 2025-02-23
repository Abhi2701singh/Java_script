function math_pi(){
    var x= Math.PI;
    document.getElementById('h1').innerText = x +" return the value of PI"; 
}
function math_round(){
    var num=prompt("enter a number")
    var x= Math.round(num);
    document.getElementById('h1').innerText = x +" return the rounded value of x ";
}
function math_pow(){
    var num1=prompt("enter a base:");
    var num2=prompt("enter a power:");
    var x= Math.pow(num1,num2);
    document.getElementById('h1').innerText = x+" return the value of c to the power of y";
}
function math_sqrt(){
    var num = prompt("Enter a number:");
    var x= Math.sqrt(num);
    document.getElementById('h1').innerText = x +"return the square root of x";
}
function math_abs(){
    var num = prompt("Enter a number:");
    var x= Math.abs(num);
    document.getElementById('h1').innerText = x +" abs function return +ve value of x";
}

function math_ceil(){
    var num = prompt("Enter a number:");
    var x= Math.ceil(num);
    document.getElementById('h1').innerText = x +" return the value of x rounded up to its nearest interger";
}
function floor(){
    var num = prompt("enter a number");
    var x= Math.floor(num);
    document.getElementById('h1').innerText= x +" return the value of x rounded down to its nearest interger"
}
function min(){
var num1=prompt("enter a 1st no");
var num2=prompt("enter a 2nd no");
var num3=prompt("enter a 3rd no");
var x=Math.min(num1,num2,num3);
document.getElementById('h1').innerText=x+" is the minimum value among x y and z."
}
function max(){
var num1=prompt("enter a 1st no");
var num2=prompt("enter a 2nd no");
var x=Math.max(num1,num2);
document.getElementById('h1').innerText=x+" return the maximum value among x and y."
}
function random(){
var x=Math.random();
document.getElementById('h1').innerText=x+" return random decimal value in between 0 and 1."
}
function ran(){
var x=Math.floor(Math.random()*100+1);
document.getElementById('h1').innerText=x+" return random decimal value in between 0 and 100."
}