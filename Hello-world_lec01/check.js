const fs= require("fs")
 const os=require("os");
 console.log(os.cpus().length); // for check how many cpus do you have
 //so output is 16 so i have 16 cpus

//this is synchronous means blocking process
// console.log("1");
// const result=fs.readFileSync("contact.txt","utf-8");
// console.log(result)
// console.log("2");

//so output will be
/*
1
vikas yadav : +91111111111
 john : +91111222211
2
*/
// all commands in order
//this is asynchronous means non blocking process


// console.log("1");
// fs.readFile("contact.txt","utf-8", (err, result)=>{
//     console.log(result)
// })
// console.log("2");


//here output will be
/*
1
2
vikas yadav : +91111111111
 john : +91111222211

*/
//that means non blocking does not block there next command

