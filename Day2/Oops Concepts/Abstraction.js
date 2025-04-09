class Human{
    #age;
    constructor(age){
        this.#age=age;
    }
    #marriage=()=>{
        if(this.#age>21){
            console.log("You are eligible to marry");
        }
        else{
            console.log("You are not eligible to marry");
        }
    }
    #vote=()=>{
        (this.#age>=18)?console.log("You are eligible to vote"):console.log("You are not eligible to vote");
}
checkall(){
    this.#marriage();
    this.#vote();
}
}

const stu1=new Human(20);
stu1.checkall();