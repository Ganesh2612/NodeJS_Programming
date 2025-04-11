function Digits_count(num,count){
    if(num==0) return 0;
    return (count+1)+Digits_count(Math.floor(num/10),count);
}
let answer=Digits_count(323323,0);
console.log(answer);