function Power(base,exp){
    if(exp===0) return 1;
    return base*Power(base,exp-1);
}
let answer=Power(3,3);
console.log(answer);