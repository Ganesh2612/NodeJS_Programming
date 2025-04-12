function complement(word){
    console.log(this.name+", You are looking "+word+"!!!");
}
let women={name:"Joita Ghosh"};
complement.apply(women,["Gorgeous"]);