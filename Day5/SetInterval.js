function showTime() {
    console.log("Tick at", new Date().toLocaleTimeString());
}

let timer = setInterval(showTime, 1000);