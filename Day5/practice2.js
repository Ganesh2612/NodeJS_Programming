let ques="aaabb";
let set=new Set();
let map=new Map();
for(let val of ques){
    if(map.has(val)){
        map.set(val,map.get(val)+1);
    }
    else{
        map.set(val,1);
    }
}
let product=1;
for(let [key,val] of map){
for(let i=val;i>1;i--){
 product*=i;
}}
let fact=1;
for(let i=1;i<=ques.length;i++){
fact*=i;
}console.log(fact/product);