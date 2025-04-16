if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
      return this.indexOf(value) !== -1;
    };
  }
  console.log([1, 2, 3].includes(2)); // true
  
  // Transpiler (Babel converts this ES6 to ES5)
  const arrow = () => console.log('Arrow function');