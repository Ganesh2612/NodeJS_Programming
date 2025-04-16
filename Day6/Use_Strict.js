"use strict";
x = 10;  //will throw an error  
function test() {
  console.log(this); 
}
test();