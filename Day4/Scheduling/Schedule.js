let greet = function sayHello() {
    console.log("Hello!");
};

let anotherGreet = greet;
greet = null;

anotherGreet(); 