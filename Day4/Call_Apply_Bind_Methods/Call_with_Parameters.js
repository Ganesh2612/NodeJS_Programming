function result(marks){
    console.log(`Your child ${this.name} has scored ${marks} marks in the 10th grade`);
}
let student={name:"Kala"};
setTimeout(result.call(student,97),3000);