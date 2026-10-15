import file from "fs";
// const file =require('fs')
const a = 10;
console.log("First Line of Program");

setImmediate(() => console.log("SetImmediate Called"));
file.readFile("../SyncAndAsync/myFile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File readed : "+data);
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
})

setTimeout(() => console.log("first settimeout"), 0);

function x(y) {
    console.log("name is  " + y);
}

x(a)
