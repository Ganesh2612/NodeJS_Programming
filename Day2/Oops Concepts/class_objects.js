class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
        this.batch=2025;
    }
    department=(dept)=>console.log(`You are from ${dept} department`);
}

const stud1=new Student("Ganesh",21,9);
console.log(stud1.name+" "+stud1.age+" "+stud1.marks+" "+stud1.batch);
stud1.department("CSE");
