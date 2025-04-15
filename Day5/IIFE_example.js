let secret="This is public";
(function () {
    let secret = "🕵️ This is private!";
    console.log(secret);
})();

console.log(secret);