function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "murali" };

greet.call(person, "Hello", "!"); 
greet.apply(person, ["Hi", "?"]);