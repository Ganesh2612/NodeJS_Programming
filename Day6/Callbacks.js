function add(a, b, callback) {
    let result = a + b;
    callback(result);
  }
  
  add(7, 9, function(sum) {
    console.log("The sum is:", sum); 
  });