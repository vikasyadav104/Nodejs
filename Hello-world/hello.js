// console.log("hey there i am vikas")
// //this is run in terminal by just gives simple command node FolderName/filename.js

// //here we also learn difference between to run javascript here and run js in v8 engine(it is javascript engine that is present in chrome to run javascript )
// //for example
// console.log(window) //here this will give error 
// //but when we go to browserr and inspect then it will not give error insteadf it will gve object
// //also 
// console.log(alert('vikas')) //here it will give error

// //that means here window object is not avaiable but iin v8 it is availabale


// // now after that you will install package.json by give command in terminal node init
// //so in this lecture we just only two thing

//now in lecture 2nd we will learn  module, like in one file you can take another file but how

//lets make a function

function add(a,b){
    return (a+b);
}
function sub(a,b){
    return  (a-b);
}
//multiple function
 module.exports={
    add,
    sub,

 }

