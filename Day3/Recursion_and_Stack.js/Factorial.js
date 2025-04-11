function Factorial(n){
    if(n==1) return 1;
    return n*Factorial(n-1);
}
let answer=Factorial(5);
console.log(answer);