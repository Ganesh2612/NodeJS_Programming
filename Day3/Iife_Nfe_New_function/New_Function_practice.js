let answer=new Function('...num','return num.map((val,index,array)=>val+10)');
console.log(answer(1,4,7,24));