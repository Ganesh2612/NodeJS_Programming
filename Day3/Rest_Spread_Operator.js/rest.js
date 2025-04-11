function sum(...nums){
    return nums.reduce((sum,curr)=>sum+curr);
}

let answer=sum(1,5,8,3,9,5,3,7);
console.log(answer);