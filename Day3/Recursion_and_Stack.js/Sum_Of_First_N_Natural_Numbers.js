function Natural_nums(n){
    if(n===0) return 0;
    return n+Natural_nums(n-1);
}
let answer=Natural_nums(15);
console.log(answer);
