function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  const person = { name: 'Bob' };
  const boundGreet = greet.bind(person);
  boundGreet(); 