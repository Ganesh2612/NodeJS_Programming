class Student{
    constructor(name,phonenumber){
        this.name=name;
        this._phonenumber=phonenumber;
    }
    get phone_number(){
        return this._phonenumber;
    }

    set number(num){
           this._phonenumber = num;
    }

}
const stu1=new Student("ganesh");
console.log(stu1.name);
stu1.number(985486);
console.log(stu1.phone_number());