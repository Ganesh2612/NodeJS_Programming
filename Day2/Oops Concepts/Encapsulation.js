class Student{
    #phonenumber;
    constructor(name,phonenumber){
        this.name=name;
        this.#phonenumber=phonenumber;
    }
        get_phone_number=()=>{
            return this.#phonenumber;
        };
    
    setnumber=(num)=>{
           return this.#phonenumber=num;
    };

}
const stu1=new Student("ganesh");
console.log(stu1.name);
stu1.setnumber(985486);
console.log(stu1.get_phone_number());