let greet=function greetings(){
    console.log(this.name+", You are always Welome!! sir");
}
let Celebrity={name:"Dhoni"};
greet.apply(Celebrity);