class Shape{
    shape(){
        console.log("Define the shapes as per your specification");
    }
    
}
class Square extends Shape{
    shape(){
        console.log("It's a square");
    }
    area(num){
        let area=num*num;
        console.log(`Area is ${area}`);
    }
}
class Circle extends Shape{
    shape(){
        console.log("It's a Circle");
    }
    area(r){
        let area=Math.PI*r*r;
        console.log(`Area is ${area}`);
    }
}

const shape1=new Circle();
shape1.shape();
shape1.area(5);
const shape2=new Square();
shape2.shape();
shape2.area(10);
const shape3=new Shape();
shape3.shape();

