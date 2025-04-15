let question="abcd";
let ans=[];
//
for(let i=0;i<question.length;i++){
 for(let j=i+1;j<question.length;j++){
       ans.push(Array(`${question[i]}`,`${question[j]}`)); 
}
}
console.log(...ans);
