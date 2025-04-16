console.log('Start');
setTimeout(() => console.log('Timeout'), 1000);
Promise.reject().catch(() => console.log('Promise'));
console.log('End')