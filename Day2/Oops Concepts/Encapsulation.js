class Student{
    constructor(name,phonenumber){
        this.name=name;
        let  _phonenumber=phonenumber;

        this.get_phone_number=()=>{
            return _phonenumber;
        };
    
    this.setnumber=(num)=>{
            _phonenumber=num;
    };
}
}
const stu1=new Student("ganesh");
console.log(stu1.name);
stu1.setnumber(985486);
console.log(stu1.get_phone_number());