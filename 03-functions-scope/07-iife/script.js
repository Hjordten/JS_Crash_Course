(function () {
    const user = 'John';
    console.log("this is from script.js" + user);
    const hello = () => console.log('Hello from IIFE');
    hello();
})();

(function(name) {
    console.log('Hello ' + name);
})('Shawn');

(function hello(){
    console.log('Hello');
})();