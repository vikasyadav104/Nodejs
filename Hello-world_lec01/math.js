// const math=require("./hello") //as how we import
//second way
const {add,sub}= require("./hello")
//require builtin function is only present in  node not js

// console.log("math value is", math.add(2,4));
// console.log("math value is", math.sub(4,5));

//for second way it will change to
 console.log("math value is", add(2,4));
console.log("math value is", sub(4,5));
