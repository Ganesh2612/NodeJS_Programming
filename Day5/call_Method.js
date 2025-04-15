function greet(city) {
    console.log(`Hello, I’m ${this.name} from ${city}`);
  }
  
  const person = { name: "Ganesh" };
  greet.call(person, "Chennai");