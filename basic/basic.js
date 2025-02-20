//--------------------- built-infunction --------------------------//

// alert("hello");
// console.log("welcome");
// document.write("<h1>hey</h1>");
// prompt("please enter your name");
// prompt("please enter your name","name....");
// confirm("do you want to login");

//-------------------------- variable ----------------------------//

// var name1;
// name1="abhinav";
// alert(name1);
// name1="singh"; //variable overwrite
// alert(name1);
// document.write(name1);

//---------------------  DOM function ---------------------------//

/* 1- document.getElementById()    innerHTML() */

// var x = document.getElementById("main").innerHTML;
// console.log(x);

// document.getElementById("main").innerHTML = "<h1> welcome to js world </h1>";



/* 2- document.getElementByClassName()  and  innerHTML() */


// var x = document.getElementsByClassName("main1")[0].innerHTML;
// alert(x);  /* access class 1 data */

// var x = document.getElementsByClassName("main1")[1].innerHTML;
// alert(x);  /* access class 2 data */

// document.getElementsByClassName("main1")[0].innerHTML= " first class";
// document.getElementsByClassName("main1")[1].innerHTML= " second class";



//--------------------- String Concatenation ----------------------//


// var x="hello";
// var y=" world";
// var c=x+y+ " !";
// alert(c);

// var z ="hello "+"everyone";
// alert(z);


//--------------------------  Operators  --------------------------//

/* Arithmetic operator [ + , - , * , / , % , ++ , -- ] */

// var x=10;
// var y=20;
// var z= x+y;
// alert(z)

// var x=10;
// var y=20;
// var z= x-y;
// alert(z)

// var x=10;
// var y=20;
// var z= x*y;
// alert(z)

// var x=100;
// var y=20;
// var z= x/y;
// alert(z)

// var x=100;
// var y=20;
// var z= x%y;
// alert(z)

// var x=8;
// x++;
// alert(x);

// var y=9;
// y--;
// alert(y);


/*    Logical operator [ && , || ]     */

// var x=false;
// var y=false;
// var z= x&&y;
// document.write(z);

// var x=true;
// var y=false;
// var z= x&&y;
// document.write(z);

// var x=true;
// var y=true;
// var z= x&&y;
// document.write(z);

// var x=true;
// var y=true;
// var z= x||y;
// document.write(z);

// var x=true;
// var y=false;
// var z= x||y;
// document.write(z);

// var x=false;
// var y=false;
// var z= x||y;
// document.write(z);



/*  Ternary operator [ <condition>? <True case> : <False case> ]  */


// var x=9;
// var y=8;
// var z = x>y ? "x is greater than y" : " x is less than y";
// document.write(z)



/*     Assignment operator [ = , += , -= , *= , /= , %= ]    */

// var c=10;
// var d=c;
// document.write(d);

// var c=10;
// var c=c+=10;
// document.write(c);

// var c=10;
// var c=c-=10;
// document.write(c);

// var c=10;
// var c=c*=10;
// document.write(c);

// var c=10;
// var c=c/=10;
// document.write(c);

// var c=10;
// var c=c%=10;
// document.write(c);


/* Comparison operator [ ==, != , > , < , >= , <= ]*/


// var x= 18;
// var y=19;
// z= x==y;
// alert(z);

// var x= 18;
// var y=19;
// z= x!=y;
// alert(z);

// var x= 18;
// var y=19;
// z= x>y;
// alert(z);

// var x= 18;
// var y=19;
// z= x<y;
// alert(z);

// var x= 18;
// var y=19;
// z= x>=y;
// alert(z);

// var x= 18;
// var y=19;
// z= x<=y;
// alert(z);


/* Conditional statement */

/*           if statement           */

// var age=19;
// if (age>=18){
//     document.write("yes you can vote");
// }

/*  ----------------  if-else statement  -------------------  */

// var age=17;
// if (age>=18){
//     document.write("yes you can vote");
// }
// else{
//     document.write("No , you cannot vote ")
// }

/*  ----------------  if-else if statement  ------------------  */

// var age=17;
// if (age>=18){
//     document.write("yes you can vote");
// }
// else if(age==17){
//     document.write("Plz. wait one more year");
// }
// else{
//     document.write("No , you cannot vote");
// }