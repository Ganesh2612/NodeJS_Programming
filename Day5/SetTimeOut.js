let timeoutID = setTimeout(() => {
    console.log("This will not show");
}, 3000);

clearTimeout(timeoutID);