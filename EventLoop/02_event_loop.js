// import file from "fs";
const file=require("fs")
const a = 10;
console.log("First Line of Program");

process.nextTick(()=>console.log("Process called"));

setImmediate(() => console.log("SetImmediate Called"));

file.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File readed Successfully : " + data);
})

setTimeout(() => console.log("first settimeout"), 0);

function x(y) {
    console.log("name is  " + y);
}

x(a)

Promise.resolve('promise').then(()=>console.log("prommise called"));