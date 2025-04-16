let arr=["Banana","apple"];

let ans=[];
for(let val of arr){
    let map=new Map();
    for(let value of val){
        if(map.has(value)){
            map.set(value,map.get(value)+1);
        }
        else{
            map.set(value,1);
        }
    }
    let fact=1;
    for(let i=val.length;i>1;i--){
        fact*=i;
    }
    let divedend=1;
    for(let [key,velu] of map){
        for(let i=velu;i>1;i--){
            divedend*=i;
        }
        
    }
ans.push(fact/(divedend));
}
console.log(ans);