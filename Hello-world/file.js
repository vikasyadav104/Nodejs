//here we will learn how to do file handling

const fs= require('fs') //fs is builtin function in  node


//here firstly we will make a text file by two ways 
//1-syncronous
//2-asynchronous

//sync
// fs.writeFileSync("./test.txt", "Hello World"); //this will make a new txt file and have hello world as a text in it

//async
// fs.writeFile("test.txt", "hello world asynchronous", (err)=>{});

// //now if i want  to read file like what is print in it

//so just make a new file for read here i made contact.txt file

//this is synchronous way
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

//this is asyncronous 

//  fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//          console.log(result);
//     }
// });


//you can also apppend something in premade file

//as how we can append
fs.appendFileSync("test.txt","\nHey There")
