function greet(){
    console.log(this.name[0].toUpperCase()+this.name.slice(1)+", You are Welcome!!");
}

let person={name:"ganesh"};
greet.call(person);