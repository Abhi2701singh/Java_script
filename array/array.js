/* method-1 */

// var cars=[];
// cars=["car1","car2","car3"];
// document.write(cars[1]);

/* method-2 */

// var cars= new Array();
// cars=["car1","car2","car3"];
// document.write(cars[2]);


/* ------------  list of method  ------- */


/* 1- isArray()  */

// var arr=["mango","apple","pineapple","banana"];
// var flag=Array.isArray(arr);    /*check it is array or not*/
// document.write(flag);

/* 2- valueOf()  */

// var fruits=["mango","apple","pineapple","banana"];
// var flag = fruits.valueOf();    /*print all element of array*/
// document.write(flag);

/* 3- join()  */

// var fruits=["mango","apple","pineapple","banana"];
// var flag = fruits.join(" / ");  /*Join all elements using " / " */
// document.write(flag);


/* 4- concat()  */

// var fruits=["mango","apple","pineapple","banana"];
// var vegitable=["potato","ladyfinger","ginger"];
// var flag = fruits.concat(vegitable);  
// document.write(flag);


/* 5- indexOf()  */

// var fruits=["mango","apple","pineapple","banana"];
// var flag = fruits.indexOf("apple");  
// document.write(flag);


/* 6- pop()  */

var fruits=["mango","apple","pineapple","banana"];
var demo=fruits;
document.getElementById('res').innerText=demo;
function pop(){
    demo.pop();
    document.getElementById('res').innerText=demo;
}


/* 7- push()  */

function push(){
    var x=prompt("enter a fruit")
    demo.push(x);
    document.getElementById('res').innerText=demo;
}


/* 8- slice()  */

function slice(){
    var x= demo.slice(1);
    document.getElementById('res').innerText=x;
}


/* 9- reverse()  */

function reverse(){
    demo.reverse();
    document.getElementById('res').innerText=demo;

}


/* 6- shift()  */

function shift(){
    var x= demo.shift();
    document.getElementById('res').innerText=x;

}


/* tupeof() */

var a="hello!";
document.write(typeof a); /* string */

var a=["car1","car2"];
document.write(typeof a); /* object */

var a = 98;
document.write(typeof a); /* number */

