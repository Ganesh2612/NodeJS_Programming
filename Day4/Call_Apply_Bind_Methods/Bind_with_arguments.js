function introduce(role) {
    console.log(`I'm ${this.name}, the ${role}`);
}

const user = { name: "Bob" };
const boundIntroduce = introduce.bind(user);

boundIntroduce("Developer"); 
boundIntroduce("Manager");