class Teacher{
    constructor(name,department,gender){
        this.name=name;
        this.department=department;
        this.gender=gender;
    }
    getInfo(){
        console.log(`name : ${this.name}, department : ${this.department}, gender : ${this.gender}`);
    }
    subject(sub){
        console.log(`I am teaching ${sub}`);
    }
}
class Student extends Teacher{
    constructor(name,department,gender,marks,roll_no){
        super(name,department,gender);
        this.marks=marks;
        this.roll_no=roll_no;
    }
    studentInfo(){
        console.log(`Marks : ${this.marks}, roll_no : ${this.roll_no}`);
    }
    score(){
        console.log(`You have scored ${this.marks} CGPA.`);
    }
}

const stud1=new Student("Sindhuja","CSE","Female",9,"RA2111003010691");
stud1.getInfo();
stud1.subject("DSA");
stud1.studentInfo();
stud1.score();