let Greet=new Function(console.log("You are greeted always"));
Greet();

let Product=new Function('num1','num2','num3','return num1*num2*num3');
console.log("The product of three numbers is :"+Product(4,9,7));