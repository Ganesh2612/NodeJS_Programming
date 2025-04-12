function greetings(){
    console.log("Welcome!!");
}

let answer=setTimeout(greetings,2000);
clearTimeout(answer);